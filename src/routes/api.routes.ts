import type { Application } from 'express';

import { appLogger } from './app.logger.js';

// admin api

// buyer api
import { getMinifiedStores } from './buyer/get.minified.stores.js';
import { getStoresStatusInfo } from './buyer/get.stores.status.info.js';
import { userSession } from './user.session.js';

// ----

export function apiRoutes(app: Application) {

  userSession(app);

  // frontend errors logger
  appLogger(app);

  // admin api

  // buyer api
  getMinifiedStores(app);
  getStoresStatusInfo(app);
  
}