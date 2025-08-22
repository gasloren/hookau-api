"use strict";

import nodemailer, { type SentMessageInfo } from 'nodemailer';

import type { IEmailParams, TEmailAccount } from './types.js';

import { emails } from './emails.js';

// --------

export function sendEmail(
  account: TEmailAccount,
  params: IEmailParams
): Promise<SentMessageInfo> {

  const {
    to,
    subject,
    text,
    html,
    replyTo
  } = params;

  const {
    from,
    host,
    auth
  } = emails[account];

  console.log(`AUTH EMAIL = "${auth.user}"`)

  return new Promise((resolve, reject) => {

    const transporter = nodemailer.createTransport({
      host,
      port: 587,
      secure: false, // true for port 465, false for other ports
      auth
    });
  
    const mailOptions = {
      from,
      to,
      subject,
      text,
      html,
      replyTo
    };
  
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log('** ERROR: sendEmail() **');
        console.log(error);
        return reject(error);
      }
      return resolve(info);
    });

  });

}
