
import type { Application, Request, Response } from 'express';
import type { T } from '../../_types/index.js';

import { apiLogger } from '../../handlers/api.logger.js';
import { OOPS } from '../constants.js';

// ---

export function getCitiesNamesList(app: Application) {

  const path: T.Api.Buyer.GetCitiesNamesList.Endpoint = '/buyer-api/get-cities-names-list';

  app.get(path, async (
    req: Request<{}, {}, {}, T.Api.Buyer.GetCitiesNamesList.Params>,
    res: Response
  ) => {

    try {

      const result = await req.apiCtrl.buyer.getCitiesNamesList(req.query);

      res.status(200).json(result);

    } catch(error) {

      await apiLogger(req.mongodb, path, error?.toString());

      res.status(500).json(OOPS);

    }
  
  });

}