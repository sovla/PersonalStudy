import { createKeyv } from '@keyv/redis';
import { CacheOptions, CacheOptionsFactory } from '@nestjs/cache-manager';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CacheConfigService implements CacheOptionsFactory {
  createCacheOptions(): CacheOptions<Record<string, any>> {
    return createKeyv('redis://localhost:6379');
  }
}
