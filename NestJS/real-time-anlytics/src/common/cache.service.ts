import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class CacheService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async get<T>(key: string): Promise<T> {
    return await this.cacheManager.get<T>(key);
  }

  async set(key: string, value: any, ttl?: number): Promise<void> {
    await this.cacheManager.set(key, value, ttl);
  }

  async del(key: string): Promise<void> {
    await this.cacheManager.del(key);
  }

  async reset(): Promise<void> {
    await this.cacheManager.clear();
  }

  getUserKey(id: number): string {
    return `user:${id}`;
  }

  getAllUsersKey(): string {
    return `users:all`;
  }

  // getOrSet: 캐시된 값이 있으면 리턴, 없으면 fallback 함수를 실행해서 캐시 후 리턴
  async getOrSet<T>(
    key: string,
    ttl: number,
    fallback: () => Promise<T>,
  ): Promise<T> {
    const cached = await this.get<T>(key);
    if (cached) {
      return cached;
    }
    const value = await fallback();
    if (value) {
      await this.set(key, value, ttl);
    }
    return value;
  }
}
