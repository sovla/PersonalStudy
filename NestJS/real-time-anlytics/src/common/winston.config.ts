import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
  WinstonModuleOptions,
} from 'nest-winston';
import { LoggerService } from '@nestjs/common';
import * as winston from 'winston';
import * as WinstonElasticSearch from 'winston-elasticsearch';

const WinstonConfig = {
  transports: [
    new winston.transports.Console({
      level: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
      format: winston.format.combine(
        winston.format.ms(),
        winston.format.timestamp(),
        nestWinstonModuleUtilities.format.nestLike('MyApp', {
          colors: true,
          prettyPrint: true,
          processId: true,
          appName: true,
        }),
      ),
    }),
    new WinstonElasticSearch.ElasticsearchTransport({
      level: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
      clientOpts: { node: 'http://localhost:9200' },
    }),
  ],
} satisfies WinstonModuleOptions;
export const logger: LoggerService = WinstonModule.createLogger(WinstonConfig);

export default WinstonConfig;
