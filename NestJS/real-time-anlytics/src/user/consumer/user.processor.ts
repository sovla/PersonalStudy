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
