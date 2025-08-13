import express from 'express';
import path from 'path';
import cors from 'cors';

import dbConnect from './mongo/db.connect.js';

import { getDirname, gracefulShutdown } from './utils.js';
import Database from './mongo/database.js';

// import RedisCtl from './controllers/redis-db/RedisCtl';
// import MongoDB from './controllers/mongo-db/MongoDB';
// import Database from './database/Database';
// import handleExceptions from './handlers/handle.exceptions';
// import setupServer from './startup/setup.server';
// import { newError } from './handlers/errors.handler';
// import redisConnect from './controllers/redis-db/redis.connect';

// -------------------------------

interface AppParams {
  appName: string,
  appPort: number,
  nodeEnv: string
}

export default async function serverApp({
  appName, appPort, nodeEnv
}: AppParams) {

  if (!appName) throw new Error('Enviroment < APP_NAME >');
  if (!appPort) throw new Error('Enviroment < APP_PORT >');
  if (!nodeEnv) throw new Error('Enviroment < NODE_ENV >');

  const env = nodeEnv;
  const name = appName;
  const port = appPort;
  const app = express();

  const publicDir = path.join(getDirname(), '../../public');

  // const redisClient = await redisConnect(process.env.REDIS_URL || '');
  // const redisCtl = RedisCtl(redisClient);

  const mongoClient = await dbConnect(); // MongoDB client instance

  app.use(cors());
  app.use(express.json({ limit: '10mb' })); // <-- for base64 images
  app.use(express.static(publicDir));
  app.use((req, res, next) => {
    req.mdb = Database(mongoClient);
    next();
  });

  // Middlewares - Cors / authentication / routes
  // setupServer(app, redisCtl, database);
  
  const server = app.listen(port, () => {
    console.log(`${name} listening on port ${port} - ${env}`);
    // Here we send the ready signal to PM2
    // configure "wait_ready: true" on ecosystem.config.js
    // process.send('ready');
  });

  // Listen for termination signals
  process.on('SIGTERM', () => gracefulShutdown(server, mongoClient));
  process.on('SIGINT', () => gracefulShutdown(server, mongoClient));

  // Listen for MongoDB disconnect
  if (mongoClient) {
    // Trigger shutdown on disconnect
    mongoClient.on('topologyClosed', () => gracefulShutdown(server, mongoClient));
  }

}
