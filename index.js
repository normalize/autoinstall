
var Module = require('module')
var debug = require('debug')('autoinstall')
var execFile = require('child_process').execFileSync

if (!execFile) {
  console.error()
  console.error('You can not use `autoinstall` with this version of node!')
  console.error('You must use node v0.11.13+, which has `child_process.execFileSync()`!')
  console.error()
  process.exit(1)
}

var resolve = Module._resolveFilename
Module._resolveFilename = function (path) {
  try {
    return resolve.apply(Module, arguments)
  } catch (err) {
    if (err.code !== 'MODULE_NOT_FOUND') throw err
  }

  var name = path.split('/')[0]
  debug('downloading package: %s', name)
  execFile('npm', ['install', name])

  return resolve.apply(Module, arguments)
}
