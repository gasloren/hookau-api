import type { Application } from 'express';

import { appLogger } from './app.logger.js';

// admins api
import { migrateCities } from './admin/migrate.cities.js';

// buyers api
import { getMinifiedStores } from './buyer/get.minified.stores.js';
import { getStoresStatusInfo } from './buyer/get.stores.status.info.js';

// ----

export function apiRoutes(app: Application) {

  // frontend errors logger
  appLogger(app);

  // admins api
  migrateCities(app);

  // buyers api
  getMinifiedStores(app);
  getStoresStatusInfo(app);
  
}