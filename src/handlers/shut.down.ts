import type { IncomingMessage, Server, ServerResponse } from 'http';
import type { RedisClientType } from '@redis/client';
import type { MongoClient } from 'mongodb';

// --

type AppServer = Server<typeof IncomingMessage, typeof ServerResponse>;

// --
// Graceful shutdown function
export function gracefulShutdown({
  server,
  mongo,
  redis
}: {
  server: AppServer,
  mongo?: MongoClient,
  redis?: RedisClientType
}) {
  console.log('Initiating graceful shutdown...');
  server.close(async () => { // Stop accepting new connections
    console.log('Express server closed.');
    if (mongo) {
      await mongo.close();
      console.log('👋 Conexión cerrada con Mongo.');
    }
    if (redis) {
      await redis.close();
    }
    process.exit(0);
  });
}
