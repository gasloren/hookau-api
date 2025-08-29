import type { Application } from 'express';

import { appLogger } from './app.logger.js';

// admin api

// buyer api
import { getMinifiedStores } from './buyer/get.minified.stores.js';
import { getStoresStatusInfo } from './buyer/get.stores.status.info.js';
import { userSession } from './user.session.js';
import { postSessionSignUp } from './session/post.session.signup.js';
import { postSessionVerify } from './session/post.session.verify.js';

// ----

export function apiRoutes(app: Application) {

  userSession(app);

  // frontend errors logger
  appLogger(app);

  // session api
  postSessionSignUp(app);
  postSessionVerify(app);

  // buyer api
  getMinifiedStores(app);
  getStoresStatusInfo(app);
  
}