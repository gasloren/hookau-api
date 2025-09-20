
import type { Application, Request, Response } from 'express';
import type { T } from '../../_types/index.js';

import { apiLogger } from '../../handlers/api.logger.js';
import { OOPS } from '../constants.js';

// ---

export function getPointsPageData(app: Application) {

  const path: T.Api.Buyer.GetPointsPageData.Endpoint = '/buyer-api/get-points-page-data';

  app.get(path, async (
    req: Request<{}, {}, {}, T.Api.Buyer.GetPointsPageData.Params>,
    res: Response
  ) => {

    try {

      const result = await req.apiCtrl.buyer.getPointsPageData(req.query);

      res.status(200).json(result);

    } catch(error) {

      await apiLogger(req.mongodb, path, error?.toString());

      res.status(500).json(OOPS);

    }
  
  });

}