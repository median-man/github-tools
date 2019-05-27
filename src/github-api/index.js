const httpClient = require('./http-client')
const { createGithubDataGateway } = require('./github-api-gateway')

module.exports = createGithubDataGateway(httpClient)
