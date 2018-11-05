/* eslint no-console:0 */
/* eslint import/no-extraneous-dependencies:0 */
require('dotenv').config({ path: 'config.env' })
const express = require('express')
const {
  port,
} = require('../cfg/server')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackHot = require('webpack-hot-middleware')
const webpack = require('webpack')
const config = require('../webpack.config')
const path = require('path')

const routes = require('./api/routes')

const app = express()

app.use(express.static('public'))

const compiler = webpack(config)
const middleware = webpackMiddleware(compiler, {
  publicPath: '/assets/',
  contentBase: 'src',
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false,
    warnings: false,
  },
})

app.use(middleware)
app.use(webpackHot(compiler))

const bodyParser = require('body-parser')
app.use(bodyParser.raw())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())

app.use('/api', routes)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client/src/index.html'))
})
app.listen(port, () => {
  console.log(`DevServer listening`)
})
