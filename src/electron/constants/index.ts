import * as path from 'path';
export const isDev = process.env.NODE_ENV === 'development';

export const preloadFile = isDev ? path.resolve(__dirname, '../preload.js')
  : path.resolve(__dirname, './preload.js');
export const htmlFile = isDev ? path.resolve(__dirname, '../index.html')
  : path.resolve(__dirname, './index.html');