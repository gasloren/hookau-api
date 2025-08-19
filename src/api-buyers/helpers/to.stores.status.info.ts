
import type {
  Store
} from '../../_types/models/store.js';

import type {
  GetStoresStatusInfoPayload
} from '../../_types/request/buyers.api.js';

// --

export function toStoresStatusInfo(
  stores: Store[] = []
): GetStoresStatusInfoPayload {

  const statusInfo: GetStoresStatusInfoPayload = {};

  stores?.forEach(({ _id: storeId, status = {} }) => {
    statusInfo[storeId] = {
      activeStr: status.active ? 'true' : 'false',
      unseenStr: status.unseen?.join(',') || '',
      delayTime: status.delay || ''
    };
  });

  return statusInfo;

}
