
import type { IEmails, TEmailTransport } from './types.js';

// --

const session: TEmailTransport = {
  from: process.env?.SESSION_EMAIL_FROM || '',
  host: "smtp.hostinger.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: process.env?.SESSION_EMAIL_USER || '',
    pass: process.env?.SESSION_EMAIL_PASS || ''
  }
};


const billing: TEmailTransport = {
  from: process.env?.BILLING_EMAIL_FROM || '',
  host: "smtp.hostinger.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: process.env?.BILLING_EMAIL_USER || '',
    pass: process.env?.BILLING_EMAIL_PASS || ''
  }
};

export const emails: IEmails = {
  session,
  billing
};
