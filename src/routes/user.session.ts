
import type { Application, Request, Response } from 'express';
import type { T } from '../_types/index.js';

// ----

export function userSession(app: Application) {

  const path: T.Api.Shared.Endpoint = '/user-session';

  app.get(path, async (
    req: Request,
    res: Response
  ) => {

    if (!req.userEmail) {
      return {
        warning: 'Usuario sin permisos!'
      };
    }

    const auth = await req.mongodb.auth.getOne({
      email: req.userEmail
    });

    res.status(200).json({
      success: true,
      payload: auth
    });
  });
  
}