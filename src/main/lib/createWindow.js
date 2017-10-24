import isDev from 'electron-is-dev'
import { createWindow, windows } from 'electron-window'
import windowStateKeeper from 'electron-window-state'

export default (
  { devURL, prodURL },
  windowStateOpts = {},
  browserWindowOpts = {}
) => {
  const windowState = windowStateKeeper({
    defaultWidth: 1000,
    defaultHeight: 800,
    ...windowStateOpts
  })
  const window = createWindow({
    x: windowState.x,
    y: windowState.y,
    width: windowState.width,
    height: windowState.height,
    minWidth: 900,
    minHeight: 620,
    preload: false,
    ...browserWindowOpts
  })

  windowState.manage(window)

  const url = isDev ? devURL : prodURL
  window.showURL(url)

  return window
}

export { windows }
