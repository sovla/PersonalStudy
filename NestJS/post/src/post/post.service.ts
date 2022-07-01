import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/domain/post.entity';
import { getConnection, Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  findAll(): Promise<Post[]> {
    return this.postRepository.find();
  }

  findOne(id: number): Promise<Post> {
    return this.postRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async create(post: Post): Promise<void> {
    await this.postRepository.save({
      ...post,
      date: new Date(),
    });
  }

  async remove(id: number): Promise<void> {
    await this.postRepository.delete(id);
  }

  async update(id: number, post: Post): Promise<void> {
    const existedPost = await this.findOne(id);
    if (existedPost) {
      await getConnection()
        .createQueryBuilder()
        .update(Post)
        .set({
          ...post,
        })
        .where('id = :id', { id })
        .execute();
    }
  }
}
