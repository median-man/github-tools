const { getAllRepos, getRepo } = require('./repos')

module.exports = {
  createGithubDataGateway: httpClient => {
    return {
      allRepos: getAllRepos(httpClient),
      getRepo: repoName => getRepo(repoName, httpClient),
    }
  },
}
