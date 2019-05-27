const { createRepo } = require('./repo')
const { createGithubDataGateway } = require('./github-api-gateway')

const githubApiGateway = createGithubDataGateway()

module.exports = {
  getAllRepos: async () => {
    const data = await githubApiGateway.allRepos()
    const repos = data.map(({ name, html_url: url, pushed_at: lastPush }) =>
      createRepo(name, url, lastPush)
    )
    return repos
  },
}
