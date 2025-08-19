import type { Application } from 'express';

import type {
  ApiResponse,
  TGlobalEndpoints
} from '../_types/request/common.js';

import { apiLogger } from '../handlers/api.logger.js';
import { OOPS } from './constants.js';

// ----

export function appLogger(app: Application) {

  const path: TGlobalEndpoints = '/app-logs';

  app.post(path, async (req, res) => {

    try {

      console.log('app logs')
      console.log(req.query)
      const insertedId = await req.mdb.appLogs.insert({
        ...req.body,
        dated: new Date().toISOString()
      });
      if (!insertedId) {
        res.status(202).json({
          warning: 'No se pudo guardar el fallo'
        });
        return;
      }
      res.status(201).json({
        payload: true
      });

    } catch(error) {

      await apiLogger(req.mdb, path, error);
      res.status(500).json([ OOPS, null ]);

    }

  });
  
}