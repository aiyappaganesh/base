/* eslint prefer-arrow-callback: 0 */
/* eslint no-param-reassign: 0 */
const path = require('path')
const baseConfig = require('./base')

const srcPath = path.join(__dirname, '/../client/src/')

// Add needed plugins here

module.exports = {
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.(png|jpg|gif|woff|woff2|css|sass|scss|less|styl)$/,
        loader: 'null-loader',
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [].concat(
          baseConfig.additionalPaths,
          [
            path.join(__dirname, '/../client/src'),
            path.join(__dirname, '/../client/test'),
          ]
        ),
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    alias: {
      actions: `${srcPath}actions/`,
      reducers: `${srcPath}/reducers/`,
      helpers: path.join(__dirname, '/../client/test/helpers'),
      test: path.join(__dirname, '/../client/test/'),
      components: `${srcPath}components/`,
      containers: `${srcPath}containers/`,
      sources: `${srcPath}sources/`,
      store: `${srcPath}store/`,
      styles: `${srcPath}styles/`,
      utils: `${srcPath}utils/`,
      config: `${srcPath}config/${process.env.REACT_WEBPACK_ENV}`,
      middlewares: `${srcPath}/middlewares/`,
      sagas: `${srcPath}/middlewares/sagas`,
      jsons: path.join(__dirname, '/../sql-analysis/jsons'),
      src: defaultSettings.srcPath,
    },
  },
  plugins: [

  ],
  externals: {
    // cheerio shouldn't be here because we are using react 15 according to
    // https://github.com/airbnb/enzyme/blob/master/docs/guides/webpack.md
    // cheerio: 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  output: {
    path: path.join(__dirname, '/../client/dist/assets'),
    filename: 'tests.js',
  },
  entry: path.join(__dirname, '../client/test/loadtests.js'),
}
