const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const publicPath = '/assets/';

module.exports = {
  entry: [
    'babel-polyfill',
    // Set up an ES6-ish environment

    'whatwg-fetch',

    'react-hot-loader/patch',
    // activate HMR for React

    // 'webpack-dev-server/client?http://localhost:8080',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    // 'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    'webpack-hot-middleware/client?reload=true&path=/__webpack_hmr',

    './index.js',
    // the entry point of our app
  ],
  output: {
    filename: 'bundle.js',
    // the output bundle

    path: resolve(__dirname, 'dist'),

    publicPath,
    // necessary for HMR to know where to load the hot update chunks
  },

  context: resolve(__dirname, 'src'),

  devtool: 'cheap-module-source-map',

  devServer: {
    hot: true,
    // enable HMR on the server

    contentBase: resolve(__dirname, 'dist'),
    // match the output path

    publicPath,
    // match the output `publicPath`
    // host: "0.0.0.0",
    // port: 3000,
    overlay: {
      warnings: true,
      errors: true,
    },

    historyApiFallback: true,
  },

  resolve: {
    modules: [resolve(__dirname, 'src'), resolve(__dirname, 'shared'), 'node_modules'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src/index.html'),
    }),
  ],
};
