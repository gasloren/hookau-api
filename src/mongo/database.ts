import type { Db } from 'mongodb';
import dbCursor from './db.collection.js';

import * as Model from '../models/index.js';
import type { IDatabase } from './types.js';

// --

export function Database(mdb: Db): IDatabase {

  return {
    cities: dbCursor<Model.City>(mdb.collection('cities')),
    zones: dbCursor<Model.Zone>(mdb.collection('zones')),
    v1: {
      cities: dbCursor<Model.City_V1>(mdb.collection('cities'))
    }
  };

}