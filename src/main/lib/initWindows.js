import { app } from 'electron'
import createWindow, { windows } from './createWindow'
import isDev from 'electron-is-dev'
import checkURL from 'url-exists-deep'
import { resolve } from 'path'

const windowIdKeeper = {}

const createMainWindow = () => {
  const mainWindow = createWindow(
    {
      devURL: `http://localhost:9080`,
      prodURL: `file://${__dirname}/index.html`
    },
    { file: 'main-window-state.json' },
    { icon: resolve(__static, 'icon', 'app.png') }
  )
  if (isDev) mainWindow.webContents.openDevTools()
  windowIdKeeper.main = mainWindow.id
}

const createStorybookWindow = async () => {
  const devURL = 'http://localhost:6006'
  try {
    await checkURL(devURL)
  } catch (e) {
    return null
  }
  createWindow(
    { devURL },
    { file: 'storybook-window-state.json' },
    { minWidth: 1100 }
  )
}

app.on('activate', () => {
  const mainWindow = windows[windowIdKeeper.main]
  if (!mainWindow) createMainWindow()
})

export default async () => {
  if (isDev) await createStorybookWindow()
  createMainWindow()
}
