/* eslint pefer-template:0 */
const path = require('path')
const defaultSettings = require('./defaults')

// Additional npm to include in builds
// Add all foreign plugins you may need into this array
// @example:
// let npmBase = path.join(__dirname, '../node_modules');
// let additionalPaths = [ path.join(npmBase, 'react-bootstrap') ];
const additionalPaths = [
  'material-ui',
  'react',
  'react-dom',
  'react-redux',
  'react-router',
  'react-router-redux',
  'redux',
  'redux-form',
  'redux-saga',
  'react-addons-css-transition-group',
  'react-motion',
]

module.exports = {
  additionalPaths,
  config: {
    devtool: 'eval',
    output: {
      path: path.join(__dirname, '/../client/dist/assets'),
      filename: 'app.js',
      publicPath: defaultSettings.publicPath,
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        actions: `${defaultSettings.srcPath}/actions`,
        reducers: `${defaultSettings.srcPath}/reducers`,
        components: `${defaultSettings.srcPath}/components`,
        containers: `${defaultSettings.srcPath}/containers`,
        sources: `${defaultSettings.srcPath}/sources`,
        store: `${defaultSettings.srcPath}/store`,
        styles: `${defaultSettings.srcPath}/styles`,
        utils: `${defaultSettings.srcPath}/utils`,
        config: `${defaultSettings.srcPath}/config/${process.env.REACT_WEBPACK_ENV}`,
        middlewares: `${defaultSettings.srcPath}/middlewares`,
        sagas: `${defaultSettings.srcPath}/sagas`,
        jsons: path.join(__dirname, '/../sql-analysis/jsons'),
        src: defaultSettings.srcPath,
      },
    },
    module: {},
  }
}
