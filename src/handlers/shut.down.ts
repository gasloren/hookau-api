import type { IncomingMessage, Server, ServerResponse } from 'http';
import type { MongoClient } from 'mongodb';

// --

type AppServer = Server<typeof IncomingMessage, typeof ServerResponse>;

// --
// Graceful shutdown function
export function gracefulShutdown(server: AppServer, mongo?: MongoClient) {
  console.log('Initiating graceful shutdown...');
  server.close(() => { // Stop accepting new connections
    console.log('Express server closed.');
    if (mongo) {
      mongo.close();
    } else {
      process.exit(0);
    }
  });
}
