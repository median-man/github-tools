const server = require('./src/server')
const openBrowser = require('./src/open-browser')
const PORT = process.env.PORT || 3001
const url = `http://localhost:${PORT}`

server
  .start(PORT)
  .then(() => openBrowser.execute(url))
  .catch(console.error)
