
// -- types
import type { IDatabase } from '../../../mongo/types.js';
import type { IRedisDB } from '../../../redis/types.js';
import type { T } from '../../../_types/index.js';

// -- helpers
import { OOPS } from '../../../routes/constants.js';
import { generateTokenResponse } from './gen.token.response.js';
import { migrateClientToBuyer } from './migrate.client.to.buyer.js';
import {
  createNewBuyer,
  findBuyerByEmail,
  findBuyerByPendingEmail,
  findClientByEmail
} from './buyers.db.helpers.js';

// ---

export async function handleBuyerVerified(
  mdb: IDatabase,
  rdb: IRedisDB,
  city: string,
  email: string,
  newEmail?: string
): Promise<T.Api.Session.PostSessionVerify.MethodResp> {

  const existingBuyer = await findBuyerByEmail(mdb, email);
  if (existingBuyer) {
    return await handleExistingBuyer(mdb, rdb, city, email, newEmail);
  }

  const pendingBuyer = await findBuyerByPendingEmail(mdb, email);
  if (pendingBuyer) {
    return await handlePendingBuyer(mdb, rdb, city, pendingBuyer);
  }

  // ** buyer not exists

  const existingClient = await findClientByEmail(mdb, email);
  if (existingClient) {
    // creating from client v1
    await migrateClientToBuyer(mdb, existingClient);
  } else {
    // creating a new empty buyer
    await createNewBuyer(mdb, email);
  }

  // ** buyer should exists
  const buyer = await findBuyerByEmail(mdb, email);

  if (!buyer) return OOPS;

  return await generateTokenResponse(rdb, email, `/buyer/${city}`);

}


// ---

async function handleExistingBuyer(
  mdb: IDatabase,
  rdb: IRedisDB,
  city: string,
  email: string,
  newEmail?: string
): Promise<T.Api.Session.PostSessionVerify.MethodResp> {

  if (!newEmail || newEmail === email) {
    return await generateTokenResponse(rdb, email, `/buyer/${city}`);
  }

  const newEmailExists = await mdb.buyers.getOne({ email: newEmail });
  if (newEmailExists) {
    return {
      warning: `El email "${newEmail}" ya se encuentra registrado.`
    };
  }

  const updated = await mdb.buyers.update({
    email
  }, {
    $set: {
      'authPending.email': newEmail,
      'authPending.expAt': Date.now() + (1000 * 60 * 10) // 10 minutes
    }
  });
  if (!updated) {
    return {
      warning: 'ALgo salió mal, intentá nuevamente o escribinos por soporte.'
    };
  }

  return await generateTokenResponse(rdb, email, `/buyer/${city}/login?email=${newEmail}`);

}

// ---

async function handlePendingBuyer(
  mdb: IDatabase,
  rdb: IRedisDB,
  city: string,
  buyer: T.Model.Buyer
): Promise<T.Api.Session.PostSessionVerify.MethodResp> {

  const warning = 'No pudimos cambiar el email de la cuenta, intente nuevamente.';

  if (!buyer.authPending) return { warning };

  const email = buyer.authPending.email;
  if (!email) return { warning };

  const expiresAt = buyer.authPending.expAt || 0;

  if (Date.now() > expiresAt) {
    return {
      warning: 'El tiempo de seguridad para realizar el cambio de email ha caducado.'
    };
  }

  const updated = await mdb.buyers.update({
    _id: buyer._id
  }, {
    $set: {
      email
    },
    $unset: {
      authPending: ''
    }
  });

  if (!updated) return { warning };

  return await generateTokenResponse(rdb, email, `/buyer/${city}`);

}
