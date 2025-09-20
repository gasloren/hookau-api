import type { Application } from 'express';

import { appLogger } from './app.logger.js';

// admin api

// buyer api
import { getMinifiedStores } from './buyer/get.minified.stores.js';
import { getStoresStatusInfo } from './buyer/get.stores.status.info.js';
import { getStoreStatusInfo } from './buyer/get.store.status.info.js';
import { getStoreItem } from './buyer/get.store.item.js';
import { userSession } from './user.session.js';
import { postSessionSignUp } from './session/post.session.signup.js';
import { postSessionVerify } from './session/post.session.verify.js';
import { getStoresPromos } from './buyer/get.stores.promos.js';
import { getFormattedMenue } from './buyer/get.formatted.menue.js';
import { getMenuPageData } from './buyer/get.menu.page.data.js';
import { postMenuOrderItems } from './buyer/post.menu.order.items.js';
import { getOrderPageData } from './buyer/get.order.page.data.js';
import { getPointsPageData } from './buyer/get.points.page.data.js';

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
  getStoreStatusInfo(app);
  getStoresPromos(app);
  getStoreItem(app);
  getFormattedMenue(app);
  getMenuPageData(app);
  postMenuOrderItems(app);
  getOrderPageData(app);
  getPointsPageData(app);
  
}