const express = require('express')
const app = express()
require('./app')(app)

module.exports = {
  start: port =>
    new Promise((resolve, reject) => {
      try {
        app.listen(port, resolve)
      } catch (error) {
        reject(error)
      }
    }),
}
