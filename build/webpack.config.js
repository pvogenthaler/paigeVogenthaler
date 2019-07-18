const webpack = require('webpack');
const path = require('path');

const PUBLIC_DIR = path.resolve(__dirname, '../public');
const SRC_DIR = path.resolve(__dirname, '../src');

const config = {
  entry: SRC_DIR + '/app/App.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.scss']
  },
  output: {
    path: PUBLIC_DIR,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: PUBLIC_DIR,
    historyApiFallback: true
  }
};

module.exports = config;
