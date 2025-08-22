

export function isValidEmail(email = ''): boolean {
  const validateEmailRegex = /^\S+@\S+\.\S+$/;
  return validateEmailRegex.test(email);
}

export function isValidPhone(phone = ''): boolean {
  const validatePhoneNumberRegex = /^\+?[1-9][0-9]{7,14}$/;
  return validatePhoneNumberRegex.test(phone);
}

export function isValidDate(value: any): boolean {
  if (!value) return false;
  const date = new Date(value).toString().toLowerCase();
  return !date.includes('invalid');
}

export function isValidString(value: any, min = 0): boolean {
  if (typeof value !== 'string') return false;
  return value.trim().length >= min;
}

export function isValidNumber(value: any, cond?: (v: number) => boolean): boolean {
  if (typeof value !== 'number') return false;
  if (cond) return cond(value);
  return true;
}

export function isInList<T>(value: any, list: T[]): boolean {
  return list.includes(value);
}

export function isValidCity(value: any): boolean {
  if (typeof value !== 'string') return false;
  if (value.length !== 6) return false;
  return true;
}
