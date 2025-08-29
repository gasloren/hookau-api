import type { Shared } from '../apis/index.js';

// --

export type UserRoleV1 = 'admin' | 'logister' | 'store' | 'hooker';

interface BasicV1 {
  _id: string;
  username: string;
  services: {
    password: {
      bcrypt: string;
    }
  };
  createdAt: Date;
}

export interface AdminV1 extends BasicV1 {
  userrole: 'admin';
}

export interface LogisterV1 extends BasicV1 {
  userrole: 'logister';
  enabled: boolean;
  cities: string;
}

export interface StoreV1 extends BasicV1 {
  userrole: 'store';
  storeId: string;
  city: string;
  profile: {
    storeName: string;
  };
}

export type RiderZone = {
  code: string;
  name: string;
  hide: boolean;
  price: number;
}

export interface HookerV1 extends BasicV1 {
  userrole: 'hooker';
  usercode: string;   // deprecate
  hooking: boolean;
  enabled: boolean;
  blocked: boolean;
  city: string;
  profile: {
    city: string;
    nick: string;
    face: string;
    fname: string;
    lname: string;
    email: string;
    phone: string;
    bornAt: string;
    address: string;
    cuitNum: string;
    ivaType: string;
    vehicle: string;
    dominio: string;
    mpAlias: string;
    lemonTag: string;
    mpOwner: string;
  };
  vehicle?: 'auto' | 'moto' | 'bici';
  marketFee?: number;
  jobsCount?: number;
  feeParams?: {
    since: string;
    total: number;
    quant: number;
  },
  zones?: {
    [ code: string ]: RiderZone;
  };
  maxOrders?: number;
  notifyMe?: {
    offline?: 'enabled' | 'disabled';
    online?: 'enabled' | 'disabled';
  }
}

export type User_V1 = AdminV1 | LogisterV1 | StoreV1 | HookerV1;


// ---

export interface User {
  email: string;
  apps: {
    [ Property in Shared.App ]: boolean;
  };
  cities: {
    [ city: string ]: boolean;
  };
}
