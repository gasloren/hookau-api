
// response types
import type { ApiResponse } from '../shared.js';

// models types
import type {
  Profile
} from '../../models/index.js';

// ---

export type Endpoint = '/buyer-api/post-account-profile';

// ---

export type Params = {
  city: string;
  profile: Profile;
}

export type Payload = {
  profile: Profile;
};

export type Method = (
  params: Params
) => Promise<ApiResponse<Payload>>;
