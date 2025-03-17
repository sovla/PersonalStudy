import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cache } from 'cache-manager';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,

    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  private readonly CACHE_TTL = 1000 * 60 * 60; // 1 hour

  // CacheManager

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

    const cacheKey = `user:${user.id}`;
    this.cacheManager.set(cacheKey, user, this.CACHE_TTL);

    return this.usersRepository.save(user);
  }

  async getAllUsers(): Promise<User[]> {
    const cacheKey = 'users:all';
    const cachedUsers = await this.cacheManager.get<User[]>(cacheKey);
    if (cachedUsers) {
      return cachedUsers;
    }
    const maxLimit = 100;
    const users = await this.usersRepository.find({
      take: maxLimit,
      order: {
        createdAt: 'DESC',
      },
    });
    if (users) {
      this.cacheManager.set(cacheKey, users, this.CACHE_TTL);
    }

    // index apply 55ms
    // without index apply 250ms
    return users;
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
    const cacheKey = `user:${id}`;
    const cachedUser = await this.cacheManager.get<User>(cacheKey);
    if (cachedUser) {
      return cachedUser;
    }
    const result = await this.usersRepository.findOne({
      where: {
        id,
      },
    });
    if (result) {
      this.cacheManager.set(cacheKey, result, this.CACHE_TTL);
    }
    return result;
  }
}
