import type { Db } from 'mongodb';
import dbMethods from './db.methods.js';

import type { IDatabase } from './types.js';

// --

export function Database(mdb: Db): IDatabase {

  return {
    cities: dbMethods(mdb.collection('cities')),
    zones: dbMethods(mdb.collection('zones')),
    stores: dbMethods(mdb.collection('stores')),
    v1: {
      cities: dbMethods(mdb.collection('cities'))
    }
  };

}