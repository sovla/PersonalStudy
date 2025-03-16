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

  async onModuleInit() {
    const count = await this.count();
    if (count === 0) {
      this.insertBatchData();
    }
  }

  async count() {
    return this.usersRepository.count();
  }
  async insertBatchData() {
    const batchSize = 10000;
    const totalUsers = 1000000;
    let insertedRecords = 0;

    const today = new Date();

    while (insertedRecords < totalUsers) {
      const users = [];
      for (let i = 0; i < batchSize; i++) {
        users.push({
          name: `user${insertedRecords + i}${today.getTime()}`,
        });
      }
      await this.usersRepository.insert(users);
      insertedRecords += batchSize;
      console.log(`Inserted ${insertedRecords} records`);
    }
  }

  async createUser(name: string): Promise<User> {
    const user = this.usersRepository.create({ name });
    return this.usersRepository.save(user);
  }

  async getAllUsers(): Promise<User[]> {
    const maxLimit = 10000;
    // index apply 55ms
    // without index apply 250ms
    return this.usersRepository.find({
      take: maxLimit,
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async getUserByName(name: string) {
    const result = await this.usersRepository.findOne({
      where: {
        name,
      },
    });

    return result;
  }

  async getUserById(id: number) {
    const result = await this.usersRepository.findOne({
      where: {
        id,
      },
    });
    return result;
  }
}
