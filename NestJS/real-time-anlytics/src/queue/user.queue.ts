import { InjectQueue, Processor } from '@nestjs/bullmq';
import { WorkerOptions } from 'bullmq';

export enum UserMQKey {
  USER_CREATED = 'user.created',
  USER_UPDATED = 'user.updated',
  USER_DELETED = 'user.deleted',
}

export const USER_MESSAGE_QUEUE_NAME = 'user';

export const UserQueueProcessor = (workerOptions?: WorkerOptions) =>
  Processor(USER_MESSAGE_QUEUE_NAME, {
    ...workerOptions,
    concurrency: 10,
    limiter: {
      max: 1000,
      duration: 1000 * 30,
    },
  });
export const UserQueue = () => InjectQueue(USER_MESSAGE_QUEUE_NAME);
