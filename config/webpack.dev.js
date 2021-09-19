const webpack = require('webpack');
const { merge } = require('webpack-merge');
const paths = require('./paths');
const commonConfig = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        //use: [ MiniCssExtractPlugin.loader,'style-loader', 'postcss-loader', 'sass-loader'],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          'sass-loader'
        ],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin(),new MiniCssExtractPlugin()],
});
