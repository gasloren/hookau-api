
import type { Application, Request, Response } from 'express';
import type { T } from '../../_types/index.js';

import { apiLogger } from '../../handlers/api.logger.js';
import { OOPS } from '../constants.js';

// ---

export function getStoreStatusInfo(app: Application) {

  const path: T.Api.Buyer.GetStoreStatusInfo.Endpoint = '/buyer-api/get-store-status-info';

  app.get(path, async (
    req: Request<{}, {}, {}, T.Api.Buyer.GetStoreStatusInfo.Params>,
    res: Response
  ) => {

    try {

      const result = await req.apiCtrl.buyer.getStoreStatusInfo(req.query);

      res.status(200).json(result);

    } catch(error) {

      await apiLogger(req.mongodb, path, error?.toString());

      res.status(500).json(OOPS);

    }
  
  });

}