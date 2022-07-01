import { PostService } from './post.service';
import {
  Controller,
  Get,
  Body,
  Put,
  Param,
  Delete,
  Post as HTTPPost,
} from '@nestjs/common';
import { Post } from 'src/domain/post.entity';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  findAll(): Promise<Post[]> {
    return this.postService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Post> {
    return this.postService.findOne(id);
  }

  @HTTPPost()
  create(@Body() post: Post) {
    return this.postService.create(post);
  }

  @Delete(':id')
  remote(@Param('id') id: number) {
    this.postService.remove(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() Post: Post) {
    this.postService.update(id, Post);
    return `This action updates a #${id} Post`;
  }
}
