import type { Db } from 'mongodb';
import dbMethods from './db.methods.js';

import type { IDatabase } from './types.js';

// --

export function Database(mdb: Db): IDatabase {

  return {
    cities: dbMethods(mdb.collection('cities')),
    zones: dbMethods(mdb.collection('zones')),
    stores: dbMethods(mdb.collection('stores')),
    apiLogs: dbMethods(mdb.collection('api_logs')),
    appLogs: dbMethods(mdb.collection('app_logs')),
    v1: {
      cities: dbMethods(mdb.collection('cities'))
    }
  };

}