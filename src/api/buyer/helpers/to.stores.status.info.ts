
import type { T } from '../../../_types/index.js';

// --

export function toStoreStatusInfo(
  status?: T.Model.StoreStatus
): T.Model.StoreStatusInfo {

  return {
    activeStr: status?.active ? 'true' : 'false',
    unseenStr: status?.unseen?.join(',') || '',
    delayTime: status?.delay || ''
  };

}


// --

export function toStoresStatusInfo(
  stores: T.Model.Store[] = []
): T.Api.Buyer.GetStoresStatusInfo.Payload {

  const statusInfo: T.Api.Buyer.GetStoresStatusInfo.Payload = {};

  stores?.forEach((store) => {
    if (store?.status) {
      statusInfo[store._id] = toStoreStatusInfo(store.status);
    }
  });

  return statusInfo;

}
