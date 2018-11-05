/* eslint import/no-mutable-exports: 0 */
/* eslint no-unused-vars: 0 */
import config from 'config'

const baseRoutes = [
]

const devRoutes = baseRoutes.concat([])

let routes

if (config.appEnv === 'dev') {
  routes = devRoutes
} else {
  routes = baseRoutes
}

export default routes
