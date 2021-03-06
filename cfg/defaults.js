/**
 * Function that returns default values.
 * Used because Object.assign does a shallow instead of a deep copy.
 * Using [].push will add to the base array, so a require will alter
 * the base array output.
 */

const path = require('path')

const srcPath = path.join(__dirname, '/../client/src')
const dfltPort = 8080

/**
 * Get the default modules object for webpack
 * @return {Object}
 */
function getDefaultModules() {
  return {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        include: srcPath,
        loader: 'eslint-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.sass/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax',
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded',
      },
      {
        test: /\.less/,
        loader: 'style-loader!css-loader!less-loader',
      },
      {
        test: /\.styl/,
        loader: 'style-loader!css-loader!stylus-loader',
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf)$/,
        loader: 'url-loader?limit=8192',
      },
      {
        test: /\.(mp4|ogg|svg)$/,
        loader: 'file-loader',
      },
      {
        test: /\.json/,
        loader: 'json-loader',
      },
    ],
  }
}

module.exports = {
  srcPath,
  publicPath: '/assets/',
  port: dfltPort,
  getDefaultModules,
}
