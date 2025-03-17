import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CacheService } from 'src/common/cache.service';
import { LogAllMethods } from 'src/common/decorator/log-all-mehtods.decorator';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
@LogAllMethods()
export class UserService implements OnModuleInit {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private cacheService: CacheService,
  ) {}

  private readonly CACHE_TTL = 1000 * 60 * 60; // 1 hour

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

      await Promise.all(
        users.map(async (user) => {
          const cacheKey = this.cacheService.getUserKey(user.id);
          return this.cacheService.set(cacheKey, user, this.CACHE_TTL);
        }),
      );

      insertedRecords += batchSize;
      console.log(`Inserted ${insertedRecords} records`);
    }
  }

  async createUser(name: string): Promise<User> {
    const user = this.usersRepository.create({ name });
    const savedUser = await this.usersRepository.save(user);

    const cacheKey = this.cacheService.getUserKey(savedUser.id);
    await this.cacheService.set(cacheKey, savedUser, this.CACHE_TTL);
    return savedUser;
  }

  async getAllUsers(): Promise<User[]> {
    const cacheKey = this.cacheService.getAllUsersKey();
    return this.cacheService.getOrSet<User[]>(
      cacheKey,
      this.CACHE_TTL,
      async () => {
        const maxLimit = 100;
        return this.usersRepository.find({
          take: maxLimit,
          order: { createdAt: 'DESC' },
        });
      },
    );
  }

  async getUserByName(name: string): Promise<User> {
    return this.usersRepository.findOne({
      where: { name },
    });
  }

  async getUserById(id: number): Promise<User> {
    const cacheKey = this.cacheService.getUserKey(id);
    return this.cacheService.getOrSet<User>(
      cacheKey,
      this.CACHE_TTL,
      async () => {
        return this.usersRepository.findOne({ where: { id } });
      },
    );
  }
}
