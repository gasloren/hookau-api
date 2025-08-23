import type { Controller as BuyerController } from './buyer.js';
import type { Controller as SessionController } from './session.js';

export interface Controller {
  buyer: BuyerController;
  session: SessionController;
}