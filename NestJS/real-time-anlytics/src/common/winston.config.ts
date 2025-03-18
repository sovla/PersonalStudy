import * as winston from 'winston';
import * as WinstonElasticSearch from 'winston-elasticsearch';

const WinstonConfig = {
  transports: [
    new winston.transports.Console({
      level: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.printf(
          ({ timestamp, level, message }) =>
            `${timestamp} [Nest] ${level}: ${message}`,
        ),
      ),
    }),
    new WinstonElasticSearch.ElasticsearchTransport({
      level: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
      clientOpts: { node: 'http://localhost:9200' },
    }),
  ],
};

export default WinstonConfig;
