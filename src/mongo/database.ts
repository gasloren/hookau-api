import type { Db } from 'mongodb';
import dbMethods from './db.methods.js';

import type { IDatabase } from './types.js';

// --

export function Database(mongo: Db): IDatabase {

  return {
    users: dbMethods(mongo.collection('users')),
    cities: dbMethods(mongo.collection('cities')),
    clients: dbMethods(mongo.collection('clients')),
    buyers: dbMethods(mongo.collection('buyers')),
    stores: dbMethods(mongo.collection('stores')),
    orders: dbMethods(mongo.collection('orders')),
    apiLogs: dbMethods(mongo.collection('api_logs')),
    appLogs: dbMethods(mongo.collection('app_logs')),
    credentials: dbMethods(mongo.collection('credentials')),
  };

}