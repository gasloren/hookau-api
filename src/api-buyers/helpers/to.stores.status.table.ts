
import type {
  Store,
  StoresStatusTable
} from '../../_types/models/store.js';

// --

export function toStoresStatusTable(
  stores: Store[] = []
): StoresStatusTable {

  const statusTable: StoresStatusTable = {};

  stores?.forEach(({ _id: storeId, status = {} }) => {
    statusTable[storeId] = {
      activeStr: status.active ? 'true' : 'false',
      unseenStr: status.unseen?.join(',') || '',
      delayTime: status.delay || ''
    };
  });

  return statusTable;

}
