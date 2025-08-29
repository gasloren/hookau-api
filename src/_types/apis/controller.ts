import type { Controller as BuyerController } from './buyer/controller.js';
import type { Controller as SessionController } from './session/controller.js';

export interface Controller {
  buyer: BuyerController;
  session: SessionController;
}