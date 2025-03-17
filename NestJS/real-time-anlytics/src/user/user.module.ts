import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { CacheService } from 'src/common/cache.service';
import { UserProcessor } from 'src/user/consumer/user.processor';
import { USER_MESSAGE_QUEUE_NAME } from 'src/queue/user.queue';
import QueueUtil from 'src/queue/queue.util';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    ...QueueUtil.GetQueueModule(USER_MESSAGE_QUEUE_NAME),
  ],
  controllers: [UserController],
  providers: [UserService, CacheService, UserProcessor],
})
export class UserModule {}
