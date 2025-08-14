import * as Model from '../models/index.js';

// ----------

export type StringId<T> = T & { _id: string }; 

export interface IDbCollection<Model> {
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
  cities: IDbCollection<Model.City>;
  zones: IDbCollection<Model.Zone>;
  v1: {
    cities: IDbCollection<Model.City_V1>;
  }
}