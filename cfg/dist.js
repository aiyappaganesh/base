const path = require('path')
const webpack = require('webpack')
const baseConfig = require('./base')
const { getDefaultModules } = require('./defaults')

// Add needed plugins here
const globals = Object.assign({}, {}, { 'process.env.NODE_ENV': '"production"' })
const config = Object.assign({}, baseConfig.config, {
  entry: {
    app: [
      'babel-polyfill',
      path.join(__dirname, '../client/src/index'),
    ],
    vendor: baseConfig.additionalPaths,
  },
  cache: false,
  devtool: 'sourcemap',
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin(globals),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
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

// Add needed rules to the defaults here
config.module.rules.push({
  test: /\.(js|jsx)$/,
  include: [path.join(__dirname, '/../client/src')],
  use: [].concat(
    baseConfig.additionalPaths,
    ['babel']
  ),
})

module.exports = config
