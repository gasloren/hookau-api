
// response types
import type { ApiResponse, App } from '../shared.js';

// models types


// ---

export type Endpoint = '/session-api/signup';

// ---

export type Params = {
  app: App;
  city: string;
  email: string;
}

export type Payload = {
  expiresAt: number;
};

export type Method = (
  params: Params
) => Promise<ApiResponse<Payload>>;
