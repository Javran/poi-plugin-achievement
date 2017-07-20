const { dbg } = window

const debugFlag = true

const dbgHandler = dbg.extra('pluginAchievement')

if (debugFlag) {
  dbgHandler.enable()
}

// this way runtime dbgHandler 'enabled' flag will be respected,
// and also we'll get correct source locations
const debug = new (class {
  get log() {
    return dbgHandler.log
  }
  get assert() {
    return dbgHandler.assert
  }
  error =
    console.error.bind(
      console,
      `%cpluginAchievement`,
      'background: linear-gradient(30deg, cyan, white 3ex)')
})()

debug.error('test')

export { debug }
