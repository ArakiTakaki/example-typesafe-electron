import { createEndpoint } from "./util/ipcHttpLikeCreator";

export const httpLikeIPC = {
  TokenGetByName: createEndpoint<{tokenName: string}, {token: string}>('/token/get'),
};
