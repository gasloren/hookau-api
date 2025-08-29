
export type ZonePrice = {
  code: string;
  name: string;
  hide: boolean;
  price: number;
}

export type Vehicle = 'auto' | 'moto' | 'bici';

export interface Rider {
  userId: string;
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
  dominio: string;
  mpAlias: string;
  lemonTag: string;
  mpOwner: string;
  vehicle: Vehicle;
  marketFee: number;
  jobsCount: number;
  feeParams: {
    since: string;
    total: number;
    quant: number;
  };
  zones: {
    [ code: string ]: ZonePrice;
  };
  maxOrders: number;
  notifyMe: {
    offline: 'enabled' | 'disabled';
    online: 'enabled' | 'disabled';
  };
}
