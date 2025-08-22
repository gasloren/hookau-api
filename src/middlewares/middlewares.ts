import type { Application } from 'express';
import type { MongoClient } from 'mongodb';
import type { IRedisDB } from '../redis/types.js';

import { Database } from '../mongo/database.js';
import { ApiController } from '../api/api.controller.js';

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

export function attachApiController(
  app: Application,
  mongoClient: MongoClient,
  redisClient: IRedisDB
) {
  app.use((req, res, next) => {
    req.mongodb = Database(mongoClient.db(process.env.DATABASE));
    req.redisdb = redisClient;
    req.apiCtrl = ApiController(req.mongodb, req.redisdb);
    next();
  });
}

// ----

export function attachUserSession(
  app: Application
) {

  app.use(async (req, res, next) => {
    const token = req.headers['x-session-token'] as string;
    if (token && req.redisdb) {
      const jsonUser = await req.redisdb.get(token);
      if (jsonUser) {
        req.session = JSON.parse(jsonUser);
      }
    }
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
