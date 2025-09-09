import type { Db } from 'mongodb';
import dbMethods from './db.methods.js';

import type { IDatabase } from './types.js';

// --

export function Database(mongo: Db): IDatabase {

  return {
    auth: dbMethods(mongo.collection('auth')),
    cities: dbMethods(mongo.collection('cities')),
    zones: dbMethods(mongo.collection('zones')),
    buyers: dbMethods(mongo.collection('buyers')),
    riders: dbMethods(mongo.collection('riders')),
    stores: dbMethods(mongo.collection('stores')),
    orders: dbMethods(mongo.collection('orders')),
    apiLogs: dbMethods(mongo.collection('api_logs')),
    appLogs: dbMethods(mongo.collection('app_logs')),
    credentials: dbMethods(mongo.collection('credentials')),
    v1: {
      users: dbMethods(mongo.collection('users')),
      cities: dbMethods(mongo.collection('cities')),
      clients: dbMethods(mongo.collection('clients')),
    }
  };

}