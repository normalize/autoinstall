
var execFile = require('child_process').execFileSync
var assert = require('assert')

// delete all the unnecessary dependencies
execFile('npm', ['prune'])

// install the hook
require('..')

// test relative paths
assert(require('./relative'))

// require a bunch of shit
assert(require('debug'))
assert(require('mocha'))
assert(require('should'))
assert('function', typeof require('type-is'))

console.log('tests pass!!!')
