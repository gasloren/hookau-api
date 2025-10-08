
import type { Application, Request, Response } from 'express';
import type { T } from '../../_types/index.js';

import { apiLogger } from '../../handlers/api.logger.js';
import { OOPS } from '../constants.js';

// ---

export function postOrderPointId(app: Application) {

  const path: T.Api.Buyer.PostOrderPointId.Endpoint = '/buyer-api/post-order-point-id';

  app.post(path, async (
    req: Request<{}, {}, T.Api.Buyer.PostOrderPointId.Params, {}>,
    res: Response
  ) => {

    try {

      const result = await req.apiCtrl.buyer.postOrderPointId(req.body);

      res.status(200).json(result);

    } catch(error) {

      await apiLogger(req.mongodb, path, error?.toString());

      res.status(500).json(OOPS);

    }
  
  });

}