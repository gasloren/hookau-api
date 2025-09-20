import type { FormattedMenue, FormattedProduct, MenueOption } from './menue.js';
import type { Coords } from './shared.js';

// --

export type Process = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface ProcessAt {
  '0'?: number;
  '1'?: number;
  '2'?: number;
  '3'?: number;
  '4'?: number;
  '5'?: number;
  '6'?: number;
}

export type Modality = 'takeaway' | 'delivery';

export interface Shipping {
  zone: string;
  code: string;
  cost: number;
  addr: string;
  note: string;
  lat: string;
  lng: string;
  name: string;
  coords: Coords;
}

export interface Receiver {
  fname: string;
  phone: string;
}

export interface UserData {
  fname: string;
  lname: string;
  email: string;
  phone: string;
}

export interface PayerData {
  firstName: string;
  lastName: string;
  emailAddress: string;
}

export type MpStatus = 'approved' | 'refunded';
export type MpDetail = 'approved' | 'refunded';
export type MpTypeId = "credit_card" | "debit_card" | "account_money" | string;

export interface PaymentDetail {
  id: number;
  checkout: "api" | "pro";
  testing: boolean;
  dateAt: Date;
  status: MpStatus;
  detail: MpDetail;
  amount: number;
  refund: number;
  method: string;
  typeId: MpTypeId
  digits: string;
  mktFee: number;
  mpgFee: number;
  mpgTax: number;
}

export interface OrderItem {
  id: string;
  catgId: string;
  prodId: string;
  picked: {
    [ optnId: string ]: number;
  };
}

export interface OrderPayments {
  [ paymentId: string ]: PaymentDetail;
};

export type ChatSender = 'user' | 'store' | 'hooker' | 'support';

export interface Chat {
  text: string;
  from: ChatSender;
  to: ChatSender;
  time: number;
  viewed?: boolean;
  action?: string;
}

export interface DeviceInfo {
  isMobile: boolean;
  vendor: string;
  model: string;
  os: string;
  osVersion: string;
  ua: string;
  hasBrowserNotification: boolean;
  hasNavigatorGeolocation: boolean;
  hasNavigatorServiceWorker: boolean;
}

export interface ShipQuote {
  id: string;
  face: string;
  nick: string;
  name: string;
  cost: number;
  time: string;
  jobs: string;
  icon: "auto" | "moto" | "bici";
  load: 1,
  mpago: boolean;
  lemon: boolean;
  status: string;
  quoted: number;
  ignore: boolean;
  endInMinutes: number;
}

export interface OrderQuotes {
  [ id: string ]: ShipQuote;
}

export interface Adjustments {
  [ id: string ]: {
    id: string;
    amount: number;
    detail?: string;
  }
}

export interface OptionWithUnits extends MenueOption {
  units: number;
  count: boolean;
}

export interface ProductItem {
  id: string;
  pickList: OptionWithUnits[];
  addition: number;
}

export interface ProductWithItems extends FormattedProduct {
  catgId: string;
  items: ProductItem[];
}

export interface ViewerItem {
  id: string;
  name: string;
  products: ProductWithItems[];
}

export type ViewerList = ViewerItem[];

export interface Order {
  _id: string;
  refCode?: string; // deprecado
  storeId: string;
  clientId: string;
  process: Process;
  processAt: ProcessAt;
  createdAt: Date;
  modality?: Modality;
  shipping?: Shipping;
  receiver?: Receiver;
  userData: UserData;
  storeName: string;
  storeLogo: string;
  storeAddr: string;
  storeCity: string;
  storeCoords: Coords;
  cityCoords: Coords;
  orderMenue: FormattedMenue;
  orderItems: OrderItem[];
  orderView?: ViewerList;
  testing?: boolean;
  accredited: number;
  balanceDue: number;
  discounted: number;
  driverNoFee?: boolean;
  orderTotal: number;
  currentTime?: number;
  statusId: string;
  deviceInfo?: DeviceInfo;
  feeAmount: number;
  footnote?: string;
  marketFee: number;
  marketplace?: string;
  originHost: string;
  publicKey: string;
  serverUrl: string;
  useAppLinks?: "ios" | "android" | "";
  forceQuotes?: boolean;
  quoting?: boolean;
  quotingAt?: number;
  shipQuotes?: OrderQuotes;
  finalTime?: number;
  hiredAt?: number;
  hookTime?: string;
  hookedAt?: number;
  hookerFace?: string;
  hookerId?: string;
  hookerNick?: string;
  hookerPaym?: {
    mpAlias: string;
    mpOwner: string;
  };
  startSecs?: number;
  startTime?: number;
  payerData?: PayerData;
  chats: Chat[];
  deleted?: boolean;
  feeCharged?: number;
  mpDetail?: MpDetail;
  mpStatus?: MpStatus;
  paymentIds?: string[];
  payments?: OrderPayments;
  num?: number;
  response?: string;
  adjustments?: Adjustments;
}

