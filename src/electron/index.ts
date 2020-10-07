import { app } from 'electron';
import { mainWindow } from './pages/main';
import { httpLikeListen } from './icp/controllers';
import { electronLogger, createLoggerTag } from '../global/logger';
const log = electronLogger.child(createLoggerTag('main'));

app.on("window-all-closed", () => {
  log.info('end electron');
  app.quit();
});

app.on("ready", () => {
  log.info('start electron');
  httpLikeListen();
  mainWindow();
});