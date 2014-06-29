
# Autoinstall

Automatically install dependencies in node.js.
So you don't have to write them in your `package.json`,
so you don't have to use [dependency-check](http://github.com/maxogden/dependency-check),
or so do you don't have to do `npm install`.

## Development Status

This is very hacky and uses node's undocumented internals.
Thus, don't expect it to ever reach `1.0.0`.
Also, this all should ideally be included with node
once ES6 modules are supported.
But who knows when that's going to happen.

This uses [`child_process.execFileSync()`](http://nodejs.org/docs/v0.11.13/api/child_process.html#child_process_child_process_execfilesync_command_args_options),
so is only supported in node `>= v0.11.13`ish.

## CLI Usage

You can install `autoinstall` globally:

```bash
npm i -g autoinstall
```

Then use `autoinstall(1)` like `node(1)`:

```bash
autoinstall index.js
```

`autoinstall(1)` is also aliased as `a(1)`:

```bash
a index.js
```

## API Usage

```bash
npm i autoinstall
```

Autoinstall packages node.js globally.
Include it first before any other `require()` calls.

```js
require('autoinstall')

var express = require('express')
```

And you're all good!
