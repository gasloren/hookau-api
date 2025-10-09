
import type {
  Menue,
  FormattedProduct
} from './menue.js';

import type { Coords } from './shared.js';

// --

export interface StoreData {
  address: string;
  brand:string;
  genre: string;
  logourl: string;
  genres: string;
  index: number;
  others: string;
  coords: Coords;  // <-- new
}

export interface StoreInfo {
  promoted: string;
  products: string;
  schedule: string;
  modality: string;
  keywords: string;
}

export interface StoreAfip {
  facturaTipo: string;
  razonSocial: string;
  domicilioLegal: string;
  condicionIva: string;
  tipoDeDocumento: string;
  numeroDocumento: string;
  direccionEmail: string;
  referencia: string;
}

export interface StoreStatus {
  active: boolean;
  message?: string;
  minimun?: string;
  unseen: string[];
  payments: "GOOD" | "FALT";
  deliveryWarning?: string;
  operative?: string;
  oauth?: "" | "enabled";
  delay: string;
}

export interface StoreCharges {
  external: number;
  takeaway: number;
  delivery: number;
}

export interface Store {
  _id: string;
  city: string;
  afip: StoreAfip; // <-- new
  ownerId?: string;
  marketFee: number;
  chargeFrom: string;  //  "2020-10-01"
  charges: StoreCharges;
  status: StoreStatus;
  published: "SHOW" | "HIDE" | "TEST";
  publication: "FULL" | "CALL" | "INIT" | "TEST"; // deprecate
  createdAt: Date;
  data: StoreData;
  info: StoreInfo;
  menue: Menue;
}

export interface StoreMinified {
  _id: string;
  city: string;
  live: boolean;
  name: string;
  info: string;
  logo: string;
  genr: string;
  othr: string;
  addr: string;
  free: boolean;
  prom: string;
  time: string;
  keyw: string;
  test: boolean;
}

// --

// status table for frontend status refresh
export type StoreStatusInfo = {
  activeStr: 'true' | 'false';
  unseenStr: string;
  delayTime: string;
}

export type StorePromos = {
  id: string;
  name: string;
  logo: string;
  promos: FormattedProduct[];
}

