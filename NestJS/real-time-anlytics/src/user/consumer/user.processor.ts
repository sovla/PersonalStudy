import { OnWorkerEvent, WorkerHost } from '@nestjs/bullmq';
import { OnModuleDestroy, OnApplicationShutdown } from '@nestjs/common';
import { Job } from 'bullmq';
import { WinstonLogger } from 'nest-winston';
import InjectWintonLogger from 'src/common/decorator/inject-winston-logger';
import { UserQueueProcessor, UserMQKey } from 'src/queue/user.queue';
import { UserService } from 'src/user/user.service';

@UserQueueProcessor()
export class UserProcessor
  extends WorkerHost
  implements OnModuleDestroy, OnApplicationShutdown
{
  constructor(
    @InjectWintonLogger()
    private readonly logger: WinstonLogger,

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
      this.logger.log('info', '작업 성공');
      return true;
    }
    this.logger.log('info', '작업 실패');
    throw new Error('작업 실패');
  }

  @OnWorkerEvent('active')
  onActive(job: Job) {
    this.logger.log(
      'info',
      `Processing ${job.id} of type ${job.name} with data ${job.data}`,
    );
  }
  @OnWorkerEvent('completed')
  onCompleted(job, result) {
    this.logger.log('info', `✅ 작업 완료됨: ${job.id}, 결과: ${result}`);
  }

  @OnWorkerEvent('failed')
  onFailed(job, err) {
    this.logger.error(`❌ 작업 실패됨: ${job.id}, 에러:${err.message}`);
  }

  @OnWorkerEvent('ready')
  onWaiting(jobId) {
    this.logger.debug(`🕒 작업이 큐에 추가됨: ${jobId}`);
  }
}
