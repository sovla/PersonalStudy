import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async createUser(name: string): Promise<User> {
    const user = this.usersRepository.create({ name });
    return this.usersRepository.save(user);
  }

  async getAllUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }
}
