const { promisify } = require('util')
const path = require('path')
const fs = require('fs')

const readFile = promisify(fs.readFile)
const readdir = promisify(fs.readdir)

module.exports = {
  createGithubDataGateway: () => {
    return {
      allRepos: async () => {
        const COLLECTION_NAME = 'repos'
        const fileNames = await readdir(dir(COLLECTION_NAME))
        const pages = await fetchPages(dir(COLLECTION_NAME), fileNames)
        return joinPages(pages)
      },
    }
  },
}

function dir(collection) {
  return path.join(__dirname, '../../cache', collection)
}

function fetchPages(dir, fileNames) {
  return Promise.all(
    fileNames
      .map(name => path.join(dir, name))
      .map(name => readFile(name, 'utf8'))
  )
}

function joinPages(pages) {
  return pages
    .map(JSON.parse)
    .filter(Array.isArray)
    .reduce((acc, page) => acc.concat(page))
}
