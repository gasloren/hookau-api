
// response types
import type { ApiResponse } from '../shared.js';

// models types
import type {
  FormattedMenue,
  StoreStatusInfo
} from '../../models/index.js';

// ---

export type Endpoint = '/buyer-api/get-formatted-menue';

// ---

export type Params = {
  city: string;
  storeId: string;
}

export type Payload = {
  storeName: string;  // store name
  storeLogo: string;
  statusInfo: StoreStatusInfo;  // first status data
  formattedMenue: FormattedMenue;
}

export type Method = (
  params: Params
) => Promise<ApiResponse<Payload>>;
