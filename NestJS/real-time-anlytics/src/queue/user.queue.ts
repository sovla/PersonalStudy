import { InjectQueue, Processor } from '@nestjs/bullmq';

export enum UserMQKey {
  USER_CREATED = 'user.created',
  USER_UPDATED = 'user.updated',
  USER_DELETED = 'user.deleted',
}

export const USER_MESSAGE_QUEUE_NAME = 'user';

export const UserQueueProcessor = () => Processor(USER_MESSAGE_QUEUE_NAME);
export const UserQueue = () => InjectQueue(USER_MESSAGE_QUEUE_NAME);
