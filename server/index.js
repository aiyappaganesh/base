/* eslint no-console:0 */
require('dotenv').config({ path: 'config.env' })

const express = require('express')
const {
  port,
} = require('../cfg/server')
const path = require('path')

const routes = require('./api/routes')

const app = express()

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

app.use(express.static(path.join(__dirname, '..', 'client/dist/')))
app.use(require('body-parser').json())
app.use(require('body-parser').urlencoded({ extended: true }))

app.use('/api', routes)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client/dist/index.html'))
})
