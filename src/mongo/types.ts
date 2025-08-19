import type {
  City,
  Zone,
  Store,
  City_V1,
  ApiLogs,
  AppLogs
} from '../_types/models/index.js';

// ----------

export type StringId<T> = T & { _id: string }; 

export interface DbMethods<Model> {
  search(filters: object, options?: object): Promise<Model[]>;
  getOne(filters: object, options?: object): Promise<Model | null>;
  insert(document: object): Promise<string>;
  update(filters: object, document: object, options?: object): Promise<number>;
  upsert(filters: object, document: object, options?: object): Promise<string | number>;
  remove(filters: object): Promise<number>;
}

// ----

export type TCollName = 
  'cities' |
  'stores' |
  'buyers' |
  'drivers' |
  'users';

export interface IDatabase {
  cities: DbMethods<City>;
  zones: DbMethods<Zone>;
  stores: DbMethods<Store>;
  apiLogs: DbMethods<ApiLogs>;
  appLogs: DbMethods<AppLogs>;
  v1: {
    cities: DbMethods<City_V1>;
  }
}