const { createRepo } = require('./repo')

module.exports = {
  createGetAllRepos: githubApiGateway => {
    return async () => {
      const data = await githubApiGateway.allRepos()
      const repos = data.map(({ name, url, pushed_at: lastPush }) =>
        createRepo(name, url, lastPush)
      )
      return repos
    }
  },
}
