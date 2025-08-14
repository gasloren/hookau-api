import type { Application } from 'express';

import { migrateCities } from './migrate.cities.js';

// ---

export function apiRoutes(app: Application) {

  migrateCities(app);
  
}