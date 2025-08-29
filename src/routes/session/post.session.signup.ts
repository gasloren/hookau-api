
import type { Application, Request, Response } from 'express';
import type { T } from '../../_types/index.js';

import { apiLogger } from '../../handlers/api.logger.js';
import { OOPS } from '../constants.js';

// ---

export function postSessionSignUp(app: Application) {

  const path: T.Api.Session.PostSessionSignUp.Endpoint = '/session-api/signup';

  app.post(path, async (
    req: Request<{}, {}, T.Api.Session.PostSessionSignUp.Params, {}>,
    res: Response
  ) => {

    try {

      const result = await req.apiCtrl.session.postSessionSignUp(req.body);

      res.status(200).json(result);

    } catch(error) {

      await apiLogger(req.mongodb, path, error?.toString());

      res.status(500).json(OOPS);

    }
  
  });

}