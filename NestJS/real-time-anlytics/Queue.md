# 메시지 큐 사용 사례

- CPU를 과도하게 사용하는 작업이 다른 작업을 방해하지 않고 진행할려고 할때
- 동기적으로 행해야 하는 작업을 MQ를 이용해 비동기 작업 형태로 변경
- 안정적인 통신 채널

## 실제 사용

- 외부 서비스 이용시 (메일링,푸시 알림,문자 전송)
- 과도한 CPU 사용 (이미지, 동영상 처리)
- 데이터 처리 및 배치 처리
- 웹 크롤링 등 오래 걸리는 작업 비동기 처리

# BullMQ 핵심 개념

|-----|-----|
|개념|설명|
|Queue| 작업을 넣고 관리하는 대기열 입니다|
|Job | Queue에서 처리되는 각각의 작업|
|Worker| 큐에서 대기중인 작업을 꺼내어 실제 처리하는 프로세서|
|Scheduler| 지연된 작업이나 반복되는 작업을 관리하는 스케줄링 시스템|

## Nest에서 BullMQ 구현 방법

작업은 3가지로 나뉜다. 1.모듈 셋팅 2.queue

### 모듈 셋팅

```ts
// app.module.ts
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AddressModule } from './address/address.module';
import { LoggerMiddleware } from 'src/middleware/logger.middleware';
import { CacheModule } from '@nestjs/cache-manager';
import { createKeyv } from '@keyv/redis';
import { BullModule } from '@nestjs/bullmq';
import { BullBoardModule } from '@bull-board/nestjs';
import { ExpressAdapter } from '@bull-board/express';

@Module({
  imports: [
    BullModule.forRoot({
      prefix: 'mq/v1',
      connection: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullBoardModule.forRoot({
      route: '/queues',
      adapter: ExpressAdapter, // Or FastifyAdapter from `@bull-board/fastify`
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
```

```ts
// queue.util.ts
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';
import { BullBoardModule } from '@bull-board/nestjs';
import { BullModule } from '@nestjs/bullmq';

import { ModuleMetadata } from '@nestjs/common';

class QueueUtil {
  static GetQueueModule(queueName: string): ModuleMetadata['imports'] {
    return [
      BullModule.registerQueue({
        name: queueName,
      }),
      BullBoardModule.forFeature({
        name: queueName,
        adapter: BullMQAdapter, //or use BullAdapter if you're using bull instead of bullMQ
      }),
    ];
  }
}

export default QueueUtil;
```

## processor (Worker 구현체)

```ts
// user.processor
import { OnWorkerEvent, WorkerHost } from '@nestjs/bullmq';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from 'bullmq';
import { UserQueueProcessor, UserMQKey } from 'src/queue/user.queue';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';

@UserQueueProcessor()
export class UserProcessor extends WorkerHost {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    private readonly userService: UserService,
  ) {
    super();
  }
  async process(job: Job<any, any, string>) {
    if (job.name === UserMQKey.USER_CREATED) {
      return this.userService.createUser(job.data.name);
    }
    const isSuccess = Math.random() > 0.5;
    if (isSuccess) {
      console.log('작업 성공');
      return true;
    }
    console.log('작업 실패');
    throw new Error('작업 실패');
  }

  @OnWorkerEvent('active')
  onActive(job: Job) {
    console.log(
      `Processing ${job.id} of type ${job.name} with data ${job.data}`,
    );
  }
  @OnWorkerEvent('completed')
  onCompleted(job, result) {
    console.log(`✅ 작업 완료됨: ${job.id}, 결과:`, result);
  }

  @OnWorkerEvent('failed')
  onFailed(job, err) {
    console.error(`❌ 작업 실패됨: ${job.id}, 에러:`, err.message);
  }

  @OnWorkerEvent('ready')
  onWaiting(jobId) {
    console.log(`🕒 작업이 큐에 추가됨: ${jobId}`);
  }
}
```

### 메시지큐에 메시지 추가 처리

```ts
// user.service.ts
import { Queue } from 'bullmq';
import { UserMQKey, UserQueue } from 'src/queue/user.queue';

@Injectable()
@LogAllMethods()
export class UserService implements OnModuleInit {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private cacheService: CacheService,

    @UserQueue()
    private userQueue: Queue,
  ) {}
...
    async createUserJob(name: string): Promise<string> {
        const job = await this.userQueue.add(
        UserMQKey.USER_CREATED,
        {
            name: name,
        },
        {
            lifo: true, // 회원가입의 경우 대기열의 가장 앞에 추가
            priority: 1,
            attempts: 3,
            backoff: {
            type: 'exponential',
            delay: 3000,
            },
            removeOnComplete: true,
            removeOnFail: false,
        },
        );

        return job.id;
    }

}
```
