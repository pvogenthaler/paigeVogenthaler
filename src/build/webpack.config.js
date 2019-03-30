const webpack = require('webpack');
const path = require('path');

const PUBLIC_DIR = path.resolve(__dirname, '../../public');
const SRC_DIR = path.resolve(__dirname, '../');

const config = {
  entry: SRC_DIR + '/entry.js',
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
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    })
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx', '.scss']
  },
  output: {
    path: PUBLIC_DIR,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: PUBLIC_DIR
  }
};

module.exports = config;
