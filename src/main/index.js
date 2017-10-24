import { app } from 'electron'
import isDev from 'electron-is-dev'
import installExtension, {
  REACT_DEVELOPER_TOOLS,
  REDUX_DEVTOOLS
} from 'electron-devtools-installer'

import initWindows from './lib/initWindows'
import { windows } from './lib/createWindow'

app.on('ready', async () => {
  if (isDev) {
    await Promise.all([
      installExtension([ REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS ]),
      require('devtron').install()
    ])
  }
  await initWindows()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

if (module.hot) {
  module.hot.accept('./lib/initWindows', () => {
    Object.keys(windows).map(i => windows[i].close())
    initWindows()
  })
}
