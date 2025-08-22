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

// -----
// both min and max included
export function randomNumber(min = 0, max = 100): number {

  return Math.floor(Math.random() * (max - min + 1) ) + min;

}

