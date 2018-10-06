const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, '../../public');
const APP_DIR = path.resolve(__dirname, '../react');

const config = {
  entry: APP_DIR + '/entry.js',
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
  plugins: [
    new webpack.DefinePlugin({
      TEST: 'test',
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    })
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx', '.scss']
  },
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: BUILD_DIR
  }
};

module.exports = config;
