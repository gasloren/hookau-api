import { MongoClient } from 'mongodb';

import dbCursor from './db.cursor.js';

import type { ICity } from '../models/city.js';

// ----

export default function Database(client: MongoClient) {

  const db = client.db(process.env.DATABASE);

  return {
    cities: dbCursor<ICity>(db.collection('cities'))
  };

}