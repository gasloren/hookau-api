import type { IDatabase } from '../mongo/types.js';
import type { IMethods } from './types.js';

import { migrateCities } from './migrate.cities.js';

// --

export function Methods(db: IDatabase): IMethods {

  return {
    migrateCities: async () => await migrateCities(db)
  };

}