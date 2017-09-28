const path = require('path');

const DIST_PATH = path.resolve( __dirname, 'dist' );
const SOURCE_PATH = path.resolve( __dirname, 'src' );

module.exports = {
  entry: './app/index.ts',
  output: {
    filename: 'bundle.js',
    path: DIST_PATH
  },
  module: {
    loaders: [{
      test: /.ts?$/,
      loader: 'ts-loader'
    }],
    rules: [{
      test: /\.js$/,
      exclude: [/node_modules/],
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['es2015'],
        },
      }],
    }]
  }
};
