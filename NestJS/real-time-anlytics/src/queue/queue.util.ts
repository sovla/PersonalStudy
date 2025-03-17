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
