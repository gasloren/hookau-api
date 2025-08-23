
import type { IDatabase } from '../mongo/types.js';

import { migrateCities } from './startup/migrate.cities.js';

// --
/**
 * Para migrar datos por unica vez las ciudades de la v1.0 a v3.0
 * @param db
 * @returns 
 */
export async function startupInitialize(
  mdb: IDatabase
): Promise<void> {


  await migrateCities(mdb);


}
