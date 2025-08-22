import type { Controller as AdminController } from './admin.js';
import type { Controller as BuyerController } from './buyer.js';
import type { Controller as SessionController } from './session.js';

export interface Controller {
  admin: AdminController;
  buyer: BuyerController;
  session: SessionController;
}