import { ipcRenderer, ipcMain } from 'electron';
import { electronLogger, createLoggerTag, rendererLogger } from '../logger';

/**
 * HTTPみたいな形式
 * axios的な実装
 */
const fetcherLog = rendererLogger.child(createLoggerTag('ipc fetcher'));
const ipcFetcher = <IRequest, IResponse>(endpoint: string, props: IRequest): Promise<IResponse> => {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject();
    }, 1000);
    ipcRenderer.once(endpoint, (_, args: IResponse) => {
      fetcherLog.info(`receive to ${endpoint}`);
      fetcherLog.trace({ responseBody: args });
      clearTimeout(timeoutId);
      resolve(args);
    });
    fetcherLog.info(`send to ${endpoint}`);
    fetcherLog.trace({ requestBody: props });
    ipcRenderer.send(endpoint, props);
  });
};

const controllerLogger = electronLogger.child(createLoggerTag('ipc receiver'));
const ipcReceiver = <Request, Response>(endpoint: string, cb: (args: Request) => Response) => {
  controllerLogger.trace(`listen to ${endpoint}`);

  ipcMain.on(endpoint, (event, args: Request) => {
    controllerLogger.info(`${endpoint}`);
    controllerLogger.trace({ requestBody: args });
    controllerLogger.trace({ responseBody: cb(args) });

    event.sender.send(endpoint, cb(args));
  });
};

export const createEndpoint = <Request, Response>(endpoint: string) => ({
  listener: (cb: (args: Request) => Response) => {
    return ipcReceiver<Request, Response>(endpoint, cb);
  },
  fetch: (props: Request) => {
    return ipcFetcher<Request, Response>(endpoint, props);
  },
  endpoint,
}) as const;