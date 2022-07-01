import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TypeORMError } from 'typeorm';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { Post } from 'src/domain/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post])], // TypeORM
  exports: [TypeOrmModule], // TypeORM
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
