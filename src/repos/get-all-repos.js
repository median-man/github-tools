const { createRepo } = require('./repo')

module.exports = {
  getAllRepos: async gitHubApiGateway => {
    const data = await gitHubApiGateway.allRepos()
    const repos = data.map(({ name, html_url: url, pushed_at: lastPush }) =>
      createRepo(name, url, lastPush)
    )
    return repos
  },
}
