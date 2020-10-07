import { Menu, MenuItemConstructorOptions, MenuItem } from 'electron';
import { electronLogger, createLoggerTag } from '../../global/logger';
// ref https://www.kabanoki.net/1208/

export const setMenu = () => {
  const log = electronLogger.child(createLoggerTag('menu process'));
  const template: (MenuItemConstructorOptions | MenuItem)[] = [];
  const menu = Menu.buildFromTemplate(template);
  log.info('create menu');
  log.trace(JSON.stringify(template));
  Menu.setApplicationMenu(menu)
}
