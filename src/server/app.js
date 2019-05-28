const path = require('path')

const presentRepoList = require('../view-repo-list/present-repo-list')

module.exports = (app, { static }) => {
  app.get('/api/repos/:repoName', async (req, res) => {
    try {
      const { repoName } = req.params
      res.set('Cache-Control', 'max-age=60') // 1 minute
      res.json(await presentRepoList.getRepo(repoName))
    } catch (error) {
      console.error(error)
      res.status(500).json(error)
    }
  })

  app.get('/api/repos', async (req, res) => {
    try {
      res.set('Cache-Control', 'max-age=1800') // 30 minutes
      res.json(await presentRepoList.sortByLastPushAsc())
    } catch (error) {
      console.error(error)
      res.status(500).json(error)
    }
  })

  app.use(
    static(path.join(__dirname, '../view-repo-list/public'), {
      maxAge: 360000, // one hour
    })
  )
}
