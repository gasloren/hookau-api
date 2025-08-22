import type { Application, Request, Response } from 'express';
import type { T } from '../../_types/index.js';

import { apiLogger } from '../../handlers/api.logger.js';
import { OOPS } from '../constants.js';

// ---

export function migrateCities(app: Application) {

  const path: T.Api.Admin.Endpoint = '/admin-api/migrate-cities';

  app.post(path, async (
    req: Request,
    res: Response
  ) => {

    try {

      const result = await req.apiCtrl.admin.migrateCities();

      res.status(201).json(result);

    } catch(error) {

      await apiLogger(req.mongodb, path, error?.toString());
      
      res.status(500).json({
        warning: OOPS
      });

    }
    
  });

}