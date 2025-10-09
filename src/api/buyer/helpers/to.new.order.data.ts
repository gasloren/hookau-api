import type { T } from '../../../_types/index.js';
import { randomId } from '../../../utils.js';
import { toFormattedMenue } from './to.formatted.menue.js';

// ---

export function toNewOrderData(
  city: T.Model.City,
  store: T.Model.Store,
  buyer: T.Model.Buyer,
  credentials: T.Model.Credential
): Omit<T.Model.Order, '_id'> {

  const data: Omit<T.Model.Order, '_id'> = {
    process: 0,
    processAt: {
      '0': Date.now()
    },
    storeId: store._id,
    createdAt: new Date(),
    clientId: buyer._id,
    userData: {
      fname: buyer.profile?.fname || '',
      lname: buyer.profile?.lname || '',
      phone: buyer.profile?.phone || '',
      email: buyer.email?.[0] || ''
    },
    receiver: {
      fname: buyer.profile?.fname || '',
      phone: buyer.profile?.phone || ''
    },
    storeName: store.data.brand,
    storeLogo: store.data.logourl,
    storeCity: store.city,
    storeAddr: store.data.address,
    storeCoords: store.data.coords,
    cityCoords: {
      lat: city.centerLat,
      lng: city.centerLng
    },
    orderMenue: toFormattedMenue(store.menue),
    orderItems: [],
    orderView: [],
    orderTotal: 0,
    discounted: 0,
    accredited: 0,
    balanceDue: 0,
    statusId: randomId(),
    chats: [],
    publicKey: credentials?.publicKey || '',
    marketFee: 0,
    feeAmount: 0,
    originHost: '',
    serverUrl: 'https://hookau.com',
    marketplace: ''
  };

  const isMarketPlace = !!credentials?.oauth;

  // Attach marketplace fee amount
  if (isMarketPlace) {
    // buscamos is el comercio tiene una comision especial
    data.marketFee = store.marketFee || 7;
    data.marketplace = !!credentials?.oauth?.marketplaceId
      ? `MP-MKT-${credentials.oauth.marketplaceId}`
      : 'NONE';
    data.publicKey = credentials?.oauth?.publicKey || '';
  }

  return data;

}