import type { IDatabase } from './src/mongo/types.ts';
import type { IRedisDB } from './src/redis/types.ts';
import type { T } from './src/_types/index.ts';

// -----

export {}

declare global {
  namespace Express {
    export interface Request {
      mongodb: IDatabase;
      redisdb: IRedisDB;
      apiCtrl: T.Api.Controller;
      userEmail: string | null;
    }
  }
}