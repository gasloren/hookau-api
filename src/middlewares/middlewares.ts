import type { Application } from 'express';
import type { MongoClient } from 'mongodb';
import type { IRedisDB } from '../redis/types.js';

import { Database } from '../mongo/database.js';
import { ApiController } from '../api/api.controller.js';
import allowedEmails from '../allowed.emails.js';

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
        redirect: '/rejected',
        rejected: true
      });
      return;
    }
    next();
  });

}

// ----

export function attachApiController(
  app: Application,
  mongoClient: MongoClient,
  redisClient: IRedisDB
) {
  app.use(async (req, res, next) => {
    req.mongodb = Database(mongoClient.db(process.env.DATABASE));
    req.redisdb = redisClient;
    const token = req.headers['x-session-token'] as string;
    const email = await req.redisdb.get(token);
    if (email) {
      if (!allowedEmails.includes(email)) {
        res.status(401).json({
          message: 'Not authorized',
          warning: 'Not authorized',
          redirect: '/rejected',
          rejected: true
        });
        return;
      }
      req.userEmail = email;
    }
    req.apiCtrl = ApiController(req);
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
