import { BrowserWindow, BrowserWindowConstructorOptions } from 'electron';
import { preloadFile, htmlFile } from '../constants';
import { isDev } from '../../../constants';
import { electronLogger, createLoggerTag } from '../../global/logger';
const log = electronLogger.child(createLoggerTag('main window'));

export const mainWindow = () => {
  const config: BrowserWindowConstructorOptions = {
    width: 600,
    height: 600,
    x: 0,
    y: 15,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: preloadFile,
    }
  };

  const mainWindow = new BrowserWindow(config);
  log.info({config: config}, 'created main window');

  if (isDev) { // DEV環境
    const url = 'http://localhost:3000';
    mainWindow.loadURL(url);
    log.info(`load url to ${url}`);
    mainWindow.webContents.openDevTools();
  } else {     // PRD環境
    mainWindow.loadFile(htmlFile);
  }
  return mainWindow;
}