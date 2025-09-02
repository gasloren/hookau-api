
import type { Application, Request, Response } from 'express';
import type { T } from '../../_types/index.js';

import { apiLogger } from '../../handlers/api.logger.js';
import { OOPS } from '../constants.js';

// ---

export function getStoresPromos(app: Application) {

  const path: T.Api.Buyer.GetStoresPromos.Endpoint = '/buyer-api/get-stores-promos';

  app.get(path, async (
    req: Request<{}, {}, {}, T.Api.Buyer.GetStoresPromos.Params>,
    res: Response
  ) => {

    try {

      const result = await req.apiCtrl.buyer.getStoresPromos(req.query);

      res.status(200).json(result);

    } catch(error) {

      await apiLogger(req.mongodb, path, error?.toString());

      res.status(500).json(OOPS);

    }
  
  });

}