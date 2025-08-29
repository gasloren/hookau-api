
import type { T } from '../../../_types/index.js';

// --

export function toStoresStatusInfo(
  stores: T.Model.Store[] = []
): T.Api.Buyer.GetStoresStatusInfo.Payload {

  const statusInfo: T.Api.Buyer.GetStoresStatusInfo.Payload = {};

  stores?.forEach(({ _id: storeId, status = {} }) => {
    statusInfo[storeId] = {
      activeStr: status.active ? 'true' : 'false',
      unseenStr: status.unseen?.join(',') || '',
      delayTime: status.delay || ''
    };
  });

  return statusInfo;

}
