
import type { Application, Request, Response } from 'express';
import type { T } from '../../_types/index.js';

import { apiLogger } from '../../handlers/api.logger.js';
import { OOPS } from '../constants.js';

// ---

export function getStoreItem(app: Application) {

  const path: T.Api.Buyer.GetStoreItem.Endpoint = '/buyer-api/get-store-item';

  app.get(path, async (
    req: Request<{}, {}, {}, T.Api.Buyer.GetStoreItem.Params>,
    res: Response
  ) => {

    console.log('llego')
    console.log(req.query)

    try {

      const result = await req.apiCtrl.buyer.getStoreItem(req.query);

      res.status(200).json(result);

    } catch(error) {

      await apiLogger(req.mongodb, path, error?.toString());

      res.status(500).json(OOPS);

    }
  
  });

}