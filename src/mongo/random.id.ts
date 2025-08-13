import { customAlphabet } from 'nanoid';

// ----

export function randomId(prefix = '', length = 24): string {
  const numbers = '0123456789';
  const lowers = 'qwertyuiopasdfghjklzxcvbnm';
  const uppers = lowers.toUpperCase();
  const chars = `${numbers}${lowers}${uppers}`;
  const nanoid = customAlphabet(chars, length);
  return `${prefix}${nanoid()}`;
}

