/* eslint prefer-template:0 */

require('dotenv').config({ path: 'config.env' })
const path = require('path')
// mimimist is used for taking the package.json npm script and determining what env to set
const args = require('minimist')(process.argv.slice(2))

// List of allowed environments
const allowedEnvs = ['dev', 'dist', 'test']

// Set the correct environment
let env
if (args._.length > 0 && args._.indexOf('start') !== -1) {
  env = 'test'
} else if (args.env) {
  env = args.env
} else {
  env = 'dev'
}
// this is used used for determining which cfg file to use in src/config/
// see it as an alias in base
process.env.REACT_WEBPACK_ENV = env

/**
 * Build the webpack configuration
 * @param  {String} wantedEnv The wanted environment
 * @return {Object} Webpack config
 */
function buildConfig(wantedEnv) {
  const isValid = wantedEnv && wantedEnv.length > 0 && allowedEnvs.indexOf(wantedEnv) !== -1
  const validEnv = isValid ? wantedEnv : 'dev'
  console.log(validEnv)
  const config = require(path.join(__dirname, 'cfg/' + validEnv))
  return config
}

module.exports = buildConfig(env)

