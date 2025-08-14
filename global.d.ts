// import { Auth, Session, Shared } from './types/models';
// import { IDatabase } from './src/database/types';
// import { IRedisCtl } from './src/controllers/redis-db/types';

import type { IMethods } from './src/methods/types.ts';


// ------

export {}

declare global {
  namespace Express {
    export interface Request {
      api: IMethods;
      // redisCtl: IRedisCtl;
      // database: IDatabase;
      // appName?: Shared.AppName;
      // appCity?: string;
      // session?: Session.Model;
    }
  }
}