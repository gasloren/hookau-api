import type { IAdminsApi } from '../_types/request/admins.api.js';
import type { IDatabase } from '../mongo/types.js';
import { migrateCities } from './migrate.cities.js';

// --

export function adminsApi(
  mdb: IDatabase
): IAdminsApi {

  return {
    migrateCitites: migrateCities(mdb)
  };

}