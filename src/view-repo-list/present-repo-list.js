const { getAllRepos } = require('../repos/get-all-repos')

const allRepos = getAllRepos()

module.exports = {
  sortByLastPushAsc: () =>
    allRepos.then(arr =>
      arr.sort((a, b) => (a.lastPush > b.lastPush ? 1 : -1))
    ),
}
