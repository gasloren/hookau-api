import type { Application, Request, Response } from 'express';

import type {
  TAdminsEndpoint
} from '../../_types/request/admins.api.js';

import { adminsApi } from '../../api-admins/admins.api.js';
import { apiLogger } from '../../handlers/api.logger.js';
import { OOPS } from '../constants.js';

// ---

export function migrateCities(app: Application) {

  const path: TAdminsEndpoint = '/admins-api/migrate-cities';

  app.post(path, async (
    req: Request,
    res: Response
  ) => {

    try {

      const result = await adminsApi(req.mdb).migrateCities();

      res.status(201).json(result);

    } catch(error) {

      await apiLogger(req.mdb, path, error?.toString());
      
      res.status(500).json({
        warning: OOPS
      });

    }
    
  });

}