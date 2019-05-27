const childProcess = require('child_process')

module.exports = {
  execute: url => {
    childProcess
      .exec(`${getCommand()} ${url}`, {
        detached: true,
        stdio: 'ignore',
      })
      .on('error', console.error)
      .unref()
  },
}

function getCommand() {
  return process.platform === 'darwin' 
    ? 'open'
    : process.platform === 'win32'
    ? 'start'
    : 'xdg-open'
}
