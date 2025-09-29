
export type ZonePrice = {
  code: string;
  name: string;
  hide: boolean;
  price: number;
}

export type Vehicle = 'auto' | 'moto' | 'bici';

export interface Rider {
  _id: string;
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
  payment: {
    alias: string;
    owner: string;
  };
  pricing: {
    km: number;
    min: number;
  };
  maxOrders: number;
  notifyMe: {
    offline: 'enabled' | 'disabled';
    online: 'enabled' | 'disabled';
  };
}
