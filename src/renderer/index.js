import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import Router from 'react-router-redux/ConnectedRouter'
import { replayActionRenderer } from 'electron-redux'
import PeppyProvider from './containers/PeppyProvider'

import App from './containers/App'
import createStore from './lib/store'
import history from './lib/history'

const rootTag = document.getElementById('app')
const initialProps = {}
const store = createStore()
replayActionRenderer(store)

const renderApp = Component => {
  AppRegistry.registerComponent('App', () =>
    () =>
      <Provider store={store}>
        <PeppyProvider>
          <Router history={history}>
            <Component />
          </Router>
        </PeppyProvider>
      </Provider>
  )
  AppRegistry.runApplication('App', { initialProps, rootTag })
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./containers/App', () =>
    renderApp(require('./containers/App').default)
  )
}
