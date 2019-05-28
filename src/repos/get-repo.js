const { createRepo } = require('./repo')

exports.getRepo = getRepo

async function getRepo(repoName, gitHubApiGateway) {
  const {
    name,
    html_url: url,
    pushed_at: lastPush,
  } = await gitHubApiGateway.getRepo(repoName)
  return createRepo(name, url, lastPush)
}
