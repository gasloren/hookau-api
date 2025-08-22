
import type { T } from '../../_types/index.js';
import type { IDatabase } from '../../mongo/types.js';

import { migrateCities } from './migrate.cities.js';

// --

export function adminApiController(
  mdb: IDatabase
): T.Api.Admin.Controller {

  return {
    migrateCities: migrateCities(mdb)
  };

}