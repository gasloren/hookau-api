
import type { Application, Request, Response } from 'express';
import type { T } from '../_types/index.js';

import { apiLogger } from '../handlers/api.logger.js';
import { OOPS } from './constants.js';

// ----

export function appLogger(app: Application) {

  const path: T.Api.Shared.Endpoint = '/app-logs';

  app.post(path, async (req: Request, res: Response) => {

    try {

      console.log('app logs')
      console.log(req.query)
      const insertedId = await req.mongodb.appLogs.insert({
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

      // this is api logger
      await apiLogger(req.mongodb, path, error);
      res.status(500).json(OOPS);

    }

  });
  
}