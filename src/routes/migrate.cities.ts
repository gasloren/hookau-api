import type { Application, Request, Response } from 'express';
import type { TRoutePath } from './types.js';

// ---

export function migrateCities(app: Application) {

  const path: TRoutePath = '/api/migrate/cities';

  app.post(path, async (
    req: Request,
    res: Response
  ) => {
    await req.api.migrateCities();
    res.status(201).json({ success: true });
  });

}