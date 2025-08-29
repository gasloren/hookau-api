import type { Db } from 'mongodb';
import dbMethods from './db.methods.js';

import type { IDatabase } from './types.js';

// --

export function Database(mongo: Db): IDatabase {

  return {
    users: dbMethods(mongo.collection('users')),
    cities: dbMethods(mongo.collection('cities')),
    zones: dbMethods(mongo.collection('zones')),
    riders: dbMethods(mongo.collection('riders')),
    stores: dbMethods(mongo.collection('stores')),
    apiLogs: dbMethods(mongo.collection('api_logs')),
    appLogs: dbMethods(mongo.collection('app_logs')),
    v1: {
      users: dbMethods(mongo.collection('users')),
      cities: dbMethods(mongo.collection('cities'))
    }
  };

}