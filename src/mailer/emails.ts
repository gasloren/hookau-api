
import type { IEmails, TEmailTransport } from './types.js';

// --

const isProd = process.env.NODE_ENV === 'production';

const session: TEmailTransport = {
  from: process.env?.SESSION_EMAIL_FROM || '',
  host: "smtp.hostinger.com",
  port: isProd ? 465 : 587,
  secure: isProd, // true for port 465, false for other ports
  auth: {
    user: process.env?.SESSION_EMAIL_USER || '',
    pass: process.env?.SESSION_EMAIL_PASS || ''
  }
};


const billing: TEmailTransport = {
  from: process.env?.BILLING_EMAIL_FROM || '',
  host: "smtp.hostinger.com",
  port: isProd ? 465 : 587,
  secure: isProd, // true for port 465, false for other ports
  auth: {
    user: process.env?.BILLING_EMAIL_USER || '',
    pass: process.env?.BILLING_EMAIL_PASS || ''
  }
};

export const emails: IEmails = {
  session,
  billing
};
