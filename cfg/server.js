/* eslint prefer-template: 0 */
/* eslint no-console: 0 */

const configs = {
  port: process.env.NODE_PORT || 8080,
}

console.log('Dumping environment config:')
console.log(configs)

module.exports = configs
