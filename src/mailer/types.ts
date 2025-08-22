
export type TEmailTransport = {
  from: string;
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  }
}

export interface IEmailParams {
  to: string;
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
}

export interface IEmails {
  session: TEmailTransport;
  billing: TEmailTransport;
}

export type TEmailAccount = keyof IEmails;

