class Repo {
  constructor(name, url, lastPush) {
    this.name = name
    this.url = url
    this.lastPush = lastPush
  }
}

function createRepo(name, url, lastPush = null) {
  if (!name || !url) {
    throw new Error('Must provide name and url.')
  }
  return new Repo(name, url, lastPush)
}

module.exports = { createRepo }
