import * as webpack from 'webpack';
import { PATH } from '../../../constants/dirPath';


/**
 * electron自体のBuildタスク
 */
export const webpackBrowser = (isDev:boolean): webpack.Configuration => ({
  name: 'electron:main',
  mode: isDev ? 'development' : 'production',
  entry: {
    index: PATH.TYPESCRIPTS.ELECTRON,
  },
  devtool: isDev ? 'inline-source-map' : undefined,
  node: {
    __dirname: true
  },
  target: 'electron-main',
  output: {
    path: isDev ? PATH.WEBPACK.ELECTRON_DEV : PATH.WEBPACK.OUTPUT_PATH,
    filename: '[name].js',
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
