const path = require('path')

const presentRepoList = require('../view-repo-list/present-repo-list')

module.exports = app => {
  app.get('/api/repos', async (req, res) => {
    try {
      res.set('Cache-Control', 'max-age=1800') // 30 minutes
      res.json(await presentRepoList.sortByLastPushAsc())
    } catch (error) {
      res.status(500).json(error)
    }
  })

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../view-repo-list/index.html'), {
      maxAge: 360000, // one hour
    })
  })
}
