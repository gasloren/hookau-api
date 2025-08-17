import type { Application, Request, Response } from 'express';

import type {
  TAdminsEndpoint
} from '../../_types/request/admins.api.js';

import { adminsApi } from '../../api-admins/admins.api.js';
import { apiLogger } from '../../handlers/api.logger.js';

// ---

export function migrateCities(app: Application) {

  const path: TAdminsEndpoint = '/admins-api/migrate-cities';

  app.post(path, async (
    req: Request,
    res: Response
  ) => {
    try {
      const result = await adminsApi(req.mdb).migrateCities();
      const statusCode = !result?.[1] ? 202 : 200;
      res.status(statusCode).json(result);
    } catch(error) {
      await apiLogger(req.mdb, path, error);
    }
  });

}