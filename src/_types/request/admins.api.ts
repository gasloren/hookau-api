
// response types
import type { ApiResponse } from './common.js';

// models types
import type { City } from '../models/index.js';

// ---

export type TAdminsEndpoint = 
  '/admins-api/migrate-cities';

// ---

export type MigrateCitiesPayload = City[];

export type MigrateCitiesResponse = ApiResponse<MigrateCitiesPayload>;

export type IMigrateCities = () => Promise<MigrateCitiesResponse>;

// ---
// Interface for implements StoresApi
export interface IAdminsApi {

  // get stores minified list 
  migrateCities: IMigrateCities;
  

}



