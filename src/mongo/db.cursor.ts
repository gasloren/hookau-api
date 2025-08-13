import { Collection } from 'mongodb';
import { randomId } from './random.id.js';

// ----

type TCursor = Collection<Partial<{ _id: string }>>;

// ----

export default function dbCursor<Model>(cursor: TCursor) {

  return {
    search: async (filters = {}, options = {}) => {
      return await cursor.find(filters, options).toArray() as Model[];
    },
    getOne: async (filters = {}, options = {}) => {
      return await cursor.findOne(filters, options) as Model;
    },
    insert: async (document = {}): Promise<string> => {
      const payload = await cursor.insertOne({
        _id: randomId(),
        ...document
      });
      return !payload?.insertedId ? '' : payload.insertedId.toString();
    },
    update: async (filters = {}, document = {}, options = {}): Promise<number> => {
      const payload = await cursor.updateMany(filters, {
        $set: document
      }, options);
      const modified = payload?.modifiedCount || 0;
      const upserted = payload?.upsertedCount || 0;
      return modified + upserted;
    },
    remove: async (filters = {}, document = {}, options = {}): Promise<number> => {
      const payload = await cursor.deleteMany(filters, options);
      return payload?.deletedCount || 0;
    }
  };

}