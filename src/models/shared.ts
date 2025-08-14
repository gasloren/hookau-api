
// --

export type CityCode = 'AR8370' | 'AR8340';

export type MethodResponse<T> = {
  success?: true;
  message?: string;
  payload?: T;
}