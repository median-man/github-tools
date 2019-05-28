const githubApiGateway = require('../github-api')
const { getAllRepos } = require('./get-all-repos')
const { getRepo } = require('./get-repo')

module.exports = {
  getAllRepos: () => getAllRepos(githubApiGateway),
  getRepo: repoName => getRepo(repoName, githubApiGateway),
}
