import pino from 'pino';
import { isBrowser, isPreload } from './constants';
const logger = pino({
  browser: {
    asObject: isBrowser || isPreload,
  }
});
const createProcess = (process: string) => ({ process })

export const createLoggerTag = (tag: string) => ({ tag })
export const electronLogger = logger.child(createProcess('electron'));
export const preloadLogger = logger.child(createProcess('preload'));
export const rendererLogger = logger.child(createProcess('renderer'));

export const createWebpackLogger = (tag: string) => logger.child(createProcess('webpack')).child(createLoggerTag(tag));
export const createWebpackDevServerLogger = (tag: string) => logger.child(createProcess('webpack-dev-server')).child(createLoggerTag(tag));

export default logger;
