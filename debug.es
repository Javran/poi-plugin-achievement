const { dbg } = window

const debug = true

const dbgHandler = dbg.extra('pluginAchievement')

if (debug) {
  if (!dbgHandler.isEnabled())
    dbgHandler.enable()
}

// runtime dbgHandler 'enabled' flag won't be respected,
// but this way we can get correct source locations
const assert = dbgHandler.assert
const log = dbgHandler.log
const error = console.error

export {
  assert,
  log,
  error,
}
