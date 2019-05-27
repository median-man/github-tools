function createRepo(name, url, hasRecentCommit = false) {
  return { name, url, hasRecentCommit }
}

module.exports = { createRepo }
