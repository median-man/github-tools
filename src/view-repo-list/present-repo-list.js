const { getAllRepos, getRepo } = require('../repos')

module.exports = {
  getRepo,
  sortByLastPushAsc: () =>
    getAllRepos().then(arr =>
      arr.sort((a, b) => (a.lastPush > b.lastPush ? 1 : -1))
    ),
}
