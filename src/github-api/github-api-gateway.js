const { getAllRepos } = require('./getAllRepos')

module.exports = {
  createGithubDataGateway: httpClient => {
    return {
      allRepos: getAllRepos(httpClient),
    }
  },
}
