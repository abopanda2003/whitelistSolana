import { PublicKey } from "@solana/web3.js";

export type WhiteListKeyType = "persons" | "tokens" | "mints";
export type WhiteListGlobalState = {
  whitelistCreator: PublicKey;
  authorizedAddresses: PublicKey[];
  isInitialized: boolean;
  tokenSwapPoolStateAccount: PublicKey;
  yTokenAccount: PublicKey;
};
