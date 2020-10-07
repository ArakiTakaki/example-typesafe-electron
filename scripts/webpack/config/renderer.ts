import * as webpack from 'webpack';
import * as devServer from 'webpack-dev-server';
import { PATH } from '../../../constants/dirPath';
const HtmlPlugin = require('html-webpack-plugin');

/**
 * RendererProcessのタスク
 */
export const webpackRender = (isDev: boolean): webpack.Configuration & {
  devServer: devServer.Configuration;
} => ({
  name: 'electron:renderer',
  mode: isDev ? 'development' : 'production',
  entry: {
    renderer: PATH.TYPESCRIPTS.BROWSER,
  },
  devtool: isDev ? 'inline-source-map' : undefined,
  target: 'web',
  output: {
    path: PATH.WEBPACK.OUTPUT_PATH,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          { loader: 'ts-loader', }
        ],
      },
      {
        test: /\.(fpc|mps|mpb|cxc|cxs|cxb|tga|glsl|vs|fs|jpg|png|gif|obj|mtl)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: "[name].[ext]",
            }
          }
        ],
      }
    ]
  },
  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
    ],
  },
  plugins: [
    new HtmlPlugin({template: PATH.HTML.BROWSER, inject: true})
  ],
  devServer: {
    contentBase: PATH.WEBPACK.OUTPUT_PATH,
    host: '0.0.0.0',
    port: 3000,
  }
});