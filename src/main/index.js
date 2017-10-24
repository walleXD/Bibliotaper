import { app } from 'electron'
import isDev from 'electron-is-dev'
import installExtension, {
  REACT_DEVELOPER_TOOLS,
  REDUX_DEVTOOLS
} from 'electron-devtools-installer'
import { replayActionMain } from 'electron-redux'
import { persistStore } from 'redux-persist'

import initWindows from './lib/initWindows'
import { windows } from './lib/createWindow'
import createStore from './lib/store'

const initStore = () => {
  const store = createStore()
  persistStore(store)
  replayActionMain(store)
}

app.on('ready', async () => {
  if (isDev) {
    await Promise.all([
      installExtension([ REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS ]),
      require('devtron').install()
    ])
  }
  initStore()
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
  module.hot.accept('./lib/store', () => initStore())
}
