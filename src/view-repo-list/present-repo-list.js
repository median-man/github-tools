const { getAllRepos } = require('../repos')

module.exports = {
  sortByLastPushAsc: () =>
    getAllRepos().then(arr =>
      arr.sort((a, b) => (a.lastPush > b.lastPush ? 1 : -1))
    ),
}
