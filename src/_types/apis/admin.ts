
// response types
import type { ApiResponse } from './shared.js';

// models types
import type { City } from '../models/index.js';

// ---

export type Endpoint = 
  '/admin-api/migrate-cities';

// ---

export type MigrateCitiesPayload = City[];

export type MigrateCitiesResponse = ApiResponse<MigrateCitiesPayload>;

export type MigrateCities = () => Promise<MigrateCitiesResponse>;

// ---
// Interface for implements StoresApi
export interface Controller {

  // get stores minified list 
  migrateCities: MigrateCities;
  

}



