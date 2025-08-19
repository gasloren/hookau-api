import express from 'express';
import path from 'path';
import cors from 'cors';

import dbConnect from './mongo/db.connect.js';

import { getDirname } from './utils.js';
import {
  checkApiCommKey,
  attachDatabase,
  notFoundHandler
} from './middlewares/middlewares.js';
import { apiRoutes } from './routes/api.routes.js';
import { gracefulShutdown } from './handlers/shut.down.js';

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

  // If error it will exit server
  const mongoClient = await dbConnect(); // MongoDB client instance

  app.use(cors());
  app.use(express.json({ limit: '10mb' })); // <-- for base64 images
  app.use(express.static(publicDir));

  // custom middlewares
  checkApiCommKey(app); // req.headers['x-api-comm-key']
  
  // attaching req.mdb = database
  attachDatabase(app, mongoClient); // req.api = methods

  // all api routes
  apiRoutes(app);

  // must be placed after api routes
  notFoundHandler(app);

  const server = app.listen(port, () => {
    console.log(`${name} listening on port ${port} - ${env}`);
    if (env === 'production' && process?.send) {
      // Here we send the ready signal to PM2
      // configure "wait_ready: true" on ecosystem.config.js
      process.send('ready');
    }
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
