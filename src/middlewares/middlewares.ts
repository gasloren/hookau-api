import type { Application } from 'express';
import type { MongoClient } from 'mongodb';

import { Database } from '../mongo/database.js';

// ----

export function checkApiCommKey(
  app: Application
) {

  app.use((req, res, next) => {
    const apiKey = req.headers['x-api-comm-key'] || '???';
    if (apiKey !== process.env.API_COMM_KEY) {
      res.status(401).json({
        message: 'Not authorized',
        warning: 'Not authorized',
        redirect: '/',
        rejected: true
      });
      return;
    }
    next();
  });

}

// ----

export function attachDatabase(
  app: Application,
  mongoClient: MongoClient
) {

  app.use((req, res, next) => {
    req.mdb = Database(mongoClient.db(process.env.DATABASE));
    next();
  });
}

// ----
/**
 * Must be after all routes
 * @param app 
 */
export function notFoundHandler(
  app: Application
) {

  app.use((req, res, next) => {
    res.status(404).json({
      message: 'Nothing found'
    });
  });

}

// ----
