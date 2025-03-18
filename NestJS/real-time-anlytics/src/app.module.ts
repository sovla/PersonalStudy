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
import { WinstonModule } from 'nest-winston';
import WinstonConfig from 'src/common/winston.config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'myuser',
      password: 'mypassword',
      database: 'mydatabase',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: process.env.NODE_ENV !== 'production',
      migrationsRun: true, // 서버 구동 시 작성된 마이그레이션 파일을 기반으로 마이그레이션을 수행하게 할지 설정하는 옵션. false로 설정하여 직접 CLI로 마이그레이션 수행
      migrations: [__dirname + '/**/migrations/*.js}'], // 마이그레이션을 수행할 파일이 관리되는 경로 설정
      migrationsTableName: 'migrations', // 마이그레이션 이력이 기록되는 테이블 이름 설정
    }),
    UserModule,
    AddressModule,
    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: () => {
        return {
          stores: [createKeyv('redis://localhost:6379')],
        };
      },
    }),
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
    WinstonModule.forRoot(WinstonConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
