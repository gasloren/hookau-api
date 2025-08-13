// import { Auth, Session, Shared } from './types/models';
// import { IDatabase } from './src/database/types';
// import { IRedisCtl } from './src/controllers/redis-db/types';
import Database from './src/mongo/database.ts';

// ------

export {}

declare global {
  namespace Express {
    export interface Request {
      mdb: Database;
      // redisCtl: IRedisCtl;
      // database: IDatabase;
      // appName?: Shared.AppName;
      // appCity?: string;
      // session?: Session.Model;
    }
  }
}