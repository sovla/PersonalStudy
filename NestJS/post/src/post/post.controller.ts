import { PostService } from './post.service';
import {
  Controller,
  Get,
  Body,
  Put,
  Param,
  Delete,
  Post as HTTPPost,
  UseGuards,
} from '@nestjs/common';
import { Post } from 'src/domain/post.entity';
import { AuthGuard } from 'src/auth/security/auth.guard';

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
  @UseGuards(AuthGuard)
  create(
    @Body()
    post: Post,
  ) {
    return this.postService.create(post);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remote(@Param('id') id: number) {
    this.postService.remove(id);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  update(@Param('id') id: number, @Body() Post: Post) {
    this.postService.update(id, Post);
    return `This action updates a #${id} Post`;
  }
}
