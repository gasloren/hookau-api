
import type { Application, Request, Response } from 'express';

import type {
  TBuyersEndpoint
} from '../../_types/request/buyers.api.js';

import { buyersApi } from '../../api-buyers/buyers.api.js';

// ---

export function getMinifiedStores(app: Application) {

  const path: TBuyersEndpoint = '/buyers-api/get-minified-stores';

  app.post(path, async (
    req: Request,
    res: Response
  ) => {
    const result = await buyersApi(req.mdb).getMinifiedStores(req.body);
    const statusCode = !result?.success ? 202 : 200;
    res.status(statusCode).json(result);
  });

}