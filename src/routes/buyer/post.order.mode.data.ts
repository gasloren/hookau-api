
import type { Application, Request, Response } from 'express';
import type { T } from '../../_types/index.js';

import { apiLogger } from '../../handlers/api.logger.js';
import { OOPS } from '../constants.js';

// ---

export function postOrderModeData(app: Application) {

  const path: T.Api.Buyer.ProstOrderModeData.Endpoint = '/buyer-api/post-order-mode-data';

  app.post(path, async (
    req: Request<{}, {}, T.Api.Buyer.ProstOrderModeData.Params, {}>,
    res: Response
  ) => {

    try {

      const result = await req.apiCtrl.buyer.postOrderModeData(req.body);

      res.status(200).json(result);

    } catch(error) {

      await apiLogger(req.mongodb, path, error?.toString());

      res.status(500).json(OOPS);

    }
  
  });

}