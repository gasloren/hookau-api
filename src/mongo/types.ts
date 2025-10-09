
import type {
  City,
  Buyer,
  Store,
  Order,
  ApiLogs,
  AppLogs,
  User_V1,
  Client,
  Credential
} from '../_types/models/index.js';

// ----------

export type StringId<T> = T & { _id: string }; 

export interface DbMethods<Model> {
  search(filters: object, options?: object): Promise<Model[]>;
  getOne(filters: object, options?: object): Promise<Model | null>;
  insert(document: object): Promise<string>;
  update(filters: object, modifier: object, options?: object): Promise<number>;
  upsert(filters: object, document: object, options?: object): Promise<string | number>;
  remove(filters: object): Promise<number>;
}

// ----

export interface IDatabase {
  cities: DbMethods<City>;
  buyers: DbMethods<Buyer>;
  stores: DbMethods<Store>;
  orders: DbMethods<Order>;
  apiLogs: DbMethods<ApiLogs>;
  appLogs: DbMethods<AppLogs>;
  credentials: DbMethods<Credential>;
  users: DbMethods<User_V1>;
  clients: DbMethods<Client>;
}