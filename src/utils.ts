import type { IncomingMessage, Server, ServerResponse } from 'http';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import type { MongoClient } from 'mongodb';
import { customAlphabet } from 'nanoid';


// --

type AppServer = Server<typeof IncomingMessage, typeof ServerResponse>;

// --
// Graceful shutdown function
export function gracefulShutdown(server: AppServer, client?: MongoClient) {
  console.log('Initiating graceful shutdown...');
  server.close(() => { // Stop accepting new connections
    console.log('Express server closed.');
    if (client) {
      client.close();
    } else {
      process.exit(0);
    }
  });
}

// --

export function getDirname() {
  return dirname(fileURLToPath(import.meta.url));
}

// ----

export function randomId(prefix = '', length = 24): string {
  const numbers = '0123456789';
  const lowers = 'qwertyuiopasdfghjklzxcvbnm';
  const uppers = lowers.toUpperCase();
  const chars = `${numbers}${lowers}${uppers}`;
  const nanoid = customAlphabet(chars, length);
  return `${prefix}${nanoid()}`;
}

// -----
// both min and max included
export function randomNumber(min = 0, max = 100): number {

  return Math.floor(Math.random() * (max - min + 1) ) + min;

}
