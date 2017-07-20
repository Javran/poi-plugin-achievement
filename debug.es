const { dbg } = window

const debug = true

const dbgHandler = dbg.extra('pluginAchievement')

if (debug) {
  if (!dbgHandler.isEnabled())
    dbgHandler.enable()
}

const assert = (...args) =>
  dbgHandler.assert.apply(this, args)

const log = (...args) =>
  dbgHandler.log.apply(this, args)

const error = (...args) =>
  console.error(...args)

export {
  assert,
  log,
  error,
}
