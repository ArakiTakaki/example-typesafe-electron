import * as path from 'path';

const BASE = path.resolve();
export const PATH = {
  WEBPACK: {
    OUTPUT_PATH: path.resolve(BASE, 'dist'),
    ELECTRON_DEV: path.resolve(BASE, 'src', 'electron'),
  },
  LOG: {
    OUTPUT_PATH: path.resolve(BASE, 'log'),
  },
  TYPESCRIPTS: {
    ELECTRON: path.resolve(BASE, 'src', 'electron', 'index.ts'),
    PRELOAD: path.resolve(BASE, 'src', 'preload', 'index.ts'),
    BROWSER: path.resolve(BASE, 'src', 'client','index.tsx'),
  },
  HTML: {
    BROWSER: path.resolve(BASE, 'src', 'client','index.html'),
  }
}
