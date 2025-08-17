// import { Auth, Session, Shared } from './types/models';
// import { IDatabase } from './src/database/types';
// import { IRedisCtl } from './src/controllers/redis-db/types';

import type { IDatabase } from './src/mongo/types.ts';

// -----

export {}

declare global {
  namespace Express {
    export interface Request {
      mdb: IDatabase;
      // redisCtl: IRedisCtl;
      // database: IDatabase;
      // appName?: Shared.AppName;
      // appCity?: string;
      // session?: Session.Model;
    }
  }
}