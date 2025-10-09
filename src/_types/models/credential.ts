

export interface OAuth {
  userId: string;
  sellerId: string;
  publicKey: string;
  accessToken: string;
  marketplaceId: string;
  expiresAtDate: string;
  refreshToken: string;
}

export interface Credential {
  _id: string;
  storeId: string;
  storeName: string;
  publicKey?: string;
  accessToken?: string;
  accountAlias?: string;
  oauth?: OAuth;
}