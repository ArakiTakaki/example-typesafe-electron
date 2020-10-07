import * as webpack from 'webpack';
import { PATH } from '../../../constants/dirPath';

/**
 * electron自体のBuildタスク
 */
export const webpackPreload = (isDev:boolean): webpack.Configuration => ({
  name: 'electron:preload',
  mode: isDev ? 'development' : 'production',
  entry: {
    preload: PATH.TYPESCRIPTS.PRELOAD,
  },
  devtool: isDev ? 'inline-source-map' : undefined,
  target: 'electron-preload',
  output: {
    path: isDev ? PATH.WEBPACK.ELECTRON_DEV : PATH.WEBPACK.OUTPUT_PATH,
    filename: 'preload.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.ts',
      '.js',
    ],
  },
});
