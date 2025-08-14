import type { Collection } from 'mongodb';
import { randomId } from './random.id.js';
import type { IDbCollection, StringId } from './types.js';

// force _id to string
type TCursor = Collection<{ _id: string; }>;

// ----

export default function DbCollection<Model>(cursor: TCursor): IDbCollection<Model> {

  const search = async (filters: object, options = {}) => {
    try {
      const list = await cursor.find(filters, options).toArray();
      return (list || []) as Model[];
    } catch(error) {
      console.log(error);
      return [] as Model[];
    }
  };

  const getOne = async (filters: object, options = {}) => {
    try {
      return await cursor.findOne(filters, options) as Model;
    } catch(error) {
      console.log(error);
      return null;
    }
  };

  const insert = async (document: object = {}) => {
    try {
      const payload = await cursor.insertOne({
        _id: randomId(), // <-- forced to string
        ...document // si ya tiene { _id } lo sobreescribe aca
      });
      return payload?.insertedId || '';
    } catch(error) {
      console.log(error);
      return '';
    }
  };

  const update = async (filters: object = {}, document: object = {}, options = {}) => {
    try {
      const payload = await cursor.updateMany(filters, {
        $set: document
      }, {
        ...options,
        upsert: false
      });
      return payload?.modifiedCount || 0;
    } catch(error) {
      console.log(error);
      return 0;
    }
  };

  const upsert = async (filters: object = {}, document: object = {}, options = {}) => {
    const item = await getOne(filters, options) as StringId<Model>;
    if (!item) return await insert(document);
    return await update({ ...filters, _id: item._id }, document, options);
  };

  const remove = async (filters: object = {}) => {
    try {
      const payload = await cursor.deleteMany(filters);
      return payload?.deletedCount || 0;
    } catch(error) {
      console.log(error);
      return 0;
    }
  };

  return {
    search,
    getOne,
    insert,
    update,
    upsert,
    remove
  };

}