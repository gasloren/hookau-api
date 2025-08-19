import type { Application } from 'express';

import type {
  TGlobalEndpoints
} from '../_types/request/common.js';

import { migrateCities } from './admin/migrate.cities.js';
import { getMinifiedStores } from './buyer/get.minified.stores.js';
import { appLogger } from './app.logger.js';

// ----

export function apiRoutes(app: Application) {

  // frontend errors logger
  appLogger(app);

  // admins api
  migrateCities(app);

  // buyers api
  getMinifiedStores(app);
  
}