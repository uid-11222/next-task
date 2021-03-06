'use strict';

var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: {
    test: './test/test',
    nextTask: './test/next-task-export',
    benchmark: './benchmark'
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].js',
    library: '[name]'
  },
  watchOptions: {
    aggregateTimeout: 200
  },
  devtool: 'source-map',
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js']
  }
};