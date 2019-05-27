const githubApiGateway = require('../github-api')
const { getAllRepos } = require('./get-all-repos')

module.exports = {
  getAllRepos: () => getAllRepos(githubApiGateway)
}
