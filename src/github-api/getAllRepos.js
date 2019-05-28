exports.getAllRepos = getAllRepos

function getAllRepos(httpClient) {
  return async () => {
    const pages = []
    let page
    for await (page of fetchRepositories(httpClient)) {
      pages.push(...page)
    }
    return pages
  }
}

async function* fetchRepositories(httpClient) {
  let url =
    'https://api.github.com/user/8689789/repos?sort=updated&direction=asc'
  while (url) {
    const { headers, data, status } = await httpClient
      .get(url)
      .catch(error => error.response)
    if (status !== 200) {
      throw new Error(`Github API Error. ${data.message || ''}`)
    }
    url = getNextUrl(headers.link)
    yield data
  }
}

function getNextUrl(s) {
  const next = s
    .split(',')
    .map(s => {
      const [url, rel] = s.split(';')
      return {
        url: url.match(/<(.*?)>/)[1],
        rel: rel.match(/"(.*?)"/)[1],
      }
    })
    .find(({ url, rel }) => rel === 'next')
  return next ? next.url : ''
}
