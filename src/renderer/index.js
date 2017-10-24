import React from 'react'
import { AppRegistry } from 'react-native'

import App from './containers/App'

const rootTag = document.getElementById('app')
const initialProps = {}

const renderApp = Component => {
  AppRegistry.registerComponent('App', () =>
    () => <Component />
  )
  AppRegistry.runApplication('App', { initialProps, rootTag })
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./containers/App', () =>
    renderApp(require('./containers/App').default)
  )
}
