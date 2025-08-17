import type { Application } from 'express';

import { migrateCities } from './admin/migrate.cities.js';
import { getMinifiedStores } from './buyer/get.minified.stores.js';

// ----

export function apiRoutes(app: Application) {

  // admins api
  migrateCities(app);

  // buyers api
  getMinifiedStores(app);
  
}