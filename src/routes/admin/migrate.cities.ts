import type { Application, Request, Response } from 'express';

import type {
  TAdminsEndpoint
} from '../../_types/request/admins.api.js';

import { adminsApi } from '../../api-admins/admins.api.js';

// ---

export function migrateCities(app: Application) {

  const path: TAdminsEndpoint = '/admins-api/migrate-cities';

  app.post(path, async (
    req: Request,
    res: Response
  ) => {
    const result = await adminsApi(req.mdb).migrateCitites();
    const statusCode = !result?.success ? 202 : 200;
    res.status(statusCode).json(result);
  });

}