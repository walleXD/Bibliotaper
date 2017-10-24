import { routerMiddleware } from 'react-router-redux'
import { forwardToMain, getInitialStateRenderer } from 'electron-redux'
import isDev from 'electron-is-dev'

import history from './history'
import initStore from 'common/lib/initRedux'

const getInitialState = () => {
  const state = getInitialStateRenderer()
  delete state._persist
  return state
}

export default () => initStore(
  getInitialState(),
  middleware => {
    if (isDev) {
      middleware.push(
        require('redux-logger').createLogger()
      )
    }
    return [
      forwardToMain,
      routerMiddleware(history),
      ...middleware
    ]
  }
)
