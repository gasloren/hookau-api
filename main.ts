import 'dotenv/config';
import serverApp from './src/app.js';

// -----

const appName = process.env.APP_NAME || '';
const appPort = Number(process.env.APP_PORT) || 0;
const nodeEnv = process.env.NODE_ENV || '';

// -----

serverApp({ appName, appPort, nodeEnv });