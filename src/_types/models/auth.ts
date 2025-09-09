import type { Shared } from '../apis/index.js';

// ---

export interface Auth {
  email: string;
  allow: {
    [ Property in Shared.App ]: string[]; // { admin: [ 'AR8340', 'AR8370' ] }
  };
}
