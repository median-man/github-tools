const express = require('express')
const app = express()
require('./app')(app)
const PORT = process.env.PORT || 8080
app.listen(PORT)
