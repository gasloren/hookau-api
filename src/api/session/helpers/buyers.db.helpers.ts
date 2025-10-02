import type { T } from '../../../_types/index.js';
import type { IDatabase } from '../../../mongo/types.js';


// ---

export async function findClientByEmail(
  mdb: IDatabase,
  email: string = '???'
): Promise<T.Model.Client | null> {

  return await mdb.v1.clients.getOne({ verifiedEmail: email });

}

// ---

export async function findBuyerByEmail(
  mdb: IDatabase,
  email: string = '???'
): Promise<T.Model.Buyer | null> {

  return await mdb.buyers.getOne({ email });

}

// --

export async function findBuyerByPendingEmail(
  mdb: IDatabase,
  email: string = '???'
): Promise<T.Model.Buyer | null> {

  return await mdb.buyers.getOne({ 'authPending.email': email });

}

// --

export async function findAuthenticationBuyer(
  mdb: IDatabase,
  email: string = '???'
): Promise<T.Model.Buyer | null> {

  const buyer = await findBuyerByEmail(mdb, email);
  if (buyer) return buyer;
  
  return await findBuyerByPendingEmail(mdb, email);
}

// --

export async function createNewBuyer(
  mdb: IDatabase,
  email: string = '???'
): Promise<boolean> {

  const data: Omit<T.Model.Buyer, '_id'> = {
    email,
    points: {},
    profile: {
      nombre: '',
      apellido: '',
      telefono: ''
    },
    customerId: ''
  };

  const upserted = await mdb.buyers.upsert({ email }, data);

  return !!upserted;

}

// --