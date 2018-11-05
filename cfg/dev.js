const path = require('path')
const webpack = require('webpack')
const baseConfig = require('./base')
const { getDefaultModules } = require('./defaults')
// Add needed plugins here
const LiveReloadPlugin = require('webpack-livereload-plugin')

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const config = Object.assign({}, baseConfig.config, {
  devtool: 'inline-source-map',
  entry: {
    app: [
      'babel-polyfill',
      'webpack-hot-middleware/client?warn=false&quiet=true',
      'react-hot-loader/patch',
      './client/src/index',
    ],
    vendor: baseConfig.additionalPaths,
  },
  cache: true,
  devtool: 'eval-source-map',
  plugins: [
    new LiveReloadPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({}),
    // new BundleAnalyzerPlugin(),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          test: "vendor",
          name: "vendor",
          filename: "vendor.bundle.js",
          enforce: true
        }
      }
    }
  },
  module: getDefaultModules(),
})

let npmBase = path.join(__dirname, '../node_modules');

// Add needed rules to the defaults here
config.module.rules.push({
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  include: [].concat(
    baseConfig.additionalPaths.map((additionalPath) => {
      return path.join(npmBase, additionalPath)
    }),
    [path.join(__dirname, '/../client/src')]
  ),
  use: ['babel-loader'],
})

module.exports = config
