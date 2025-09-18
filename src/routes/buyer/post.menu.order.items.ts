
import type { Application, Request, Response } from 'express';
import type { T } from '../../_types/index.js';

import { apiLogger } from '../../handlers/api.logger.js';
import { OOPS } from '../constants.js';

// ---

export function postMenuOrderItems(app: Application) {

  const path: T.Api.Buyer.PostMenuOrderItems.Endpoint = '/buyer-api/post-menu-order-items';

  app.post(path, async (
    req: Request<{}, {}, T.Api.Buyer.PostMenuOrderItems.Params, {}>,
    res: Response
  ) => {

    try {

      const result = await req.apiCtrl.buyer.postMenuOrderItems(req.body);

      res.status(200).json(result);

    } catch(error) {

      await apiLogger(req.mongodb, path, error?.toString());

      res.status(500).json(OOPS);

    }
  
  });

}