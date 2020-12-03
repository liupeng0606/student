'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"/api/student"',
  BASE_WEBSOCKET: '"ws://62.234.194.53:8080/api/websocket/"'
})
