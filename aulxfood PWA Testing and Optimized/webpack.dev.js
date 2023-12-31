/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');
const { WebpackStatsPlugin } = require('webpack-stats-plugin');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendor',
    },
  },
});
