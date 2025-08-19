
import type { Application, Request, Response } from 'express';

import type {
  TBuyersEndpoint,
  GetMinifiedStoresParams
} from '../../_types/request/buyers.api.js';

import { buyersApi } from '../../api-buyers/buyers.api.js';
import { apiLogger } from '../../handlers/api.logger.js';
import { OOPS } from '../constants.js';

// ---

export function getMinifiedStores(app: Application) {

  const path: TBuyersEndpoint = '/buyers-api/get-minified-stores';

  app.get(path, async (
    req: Request<{}, {}, {}, GetMinifiedStoresParams>,
    res: Response
  ) => {

    try {

      const result = await buyersApi(req.mdb).getMinifiedStores(req.query);

      res.status(200).json(result);

    } catch(error) {

      await apiLogger(req.mdb, path, error?.toString());

      res.status(500).json({
        warning: OOPS
      });

    }
  
  });

}