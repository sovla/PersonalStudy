import { User } from './auth/entity/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Post } from './domain/post.entity';
import { PostModule } from './post/post.module';
import { AuthModule } from './auth/auth.module';
import { UserAuthority } from './auth/entity/user-authority.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'post',
      entities: [Post, User, UserAuthority], // entity 추가후 넣어주기
      synchronize: true, // 운영시 사용 금지
      logging: true,
    }),
    PostModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
