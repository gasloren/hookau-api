
import type { Application, Request, Response } from 'express';
import type { T } from '../_types/index.js';

// ----

export function userSession(app: Application) {

  const path: T.Api.Shared.Endpoint = '/user-session';

  app.get(path, (
    req: Request,
    res: Response
  ) => {
    res.status(200).json({
      success: true,
      payload: req.session
    });
  });
  
}