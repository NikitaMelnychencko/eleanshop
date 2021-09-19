const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackBar = require('webpackbar');
const paths = require('./paths');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const { extendDefaultPlugins } = require("svgo");

module.exports = {
  entry: [paths.src + '/index.js'],
  output: {
    path: paths.dist,
    filename: 'bundle.js',
    publicPath: '/',
    //assetModuleFilename: 'images/[name][ext]'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      {
        test: /\.(jpe?g|png|gif|svg|eot|ttf|woff2?)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      },
      {
        test: /\.hbs$/,
        use: 'handlebars-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WebpackBar(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: paths.src + '/index.html', // шаблон
      filename: 'index.html', // название выходного файла
    }),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        // Lossless optimization with custom option
        // Feel free to experiment with options for better result for you
        plugins: [
          ["gifsicle", { interlaced: true }],
          ["jpegtran", { progressive: true }],
          ["optipng", { optimizationLevel: 5 }],
          // Svgo configuration here https://github.com/svg/svgo#configuration
          [
            "svgo",
            {
              plugins: extendDefaultPlugins([
                {
                  name: "removeViewBox",
                  active: false,
                },
                {
                  name: "addAttributesToSVGElement",
                  params: {
                    attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
                  },
                },
              ]),
            },
          ],
        ],
      },
    }),
  ],
  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.json'],
  },
  
};
