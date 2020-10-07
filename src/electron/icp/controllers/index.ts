import { httpLikeIPC } from "../../../global/endpoints";

export const httpLikeListen = () => {
  httpLikeIPC.TokenGetByName.listener((request) => {
    return {
      token: 'hogehoge' + request.tokenName,
    };
  });
};