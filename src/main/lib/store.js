import { forwardToRenderer, triggerAlias } from 'electron-redux'
import { persistReducer } from 'redux-persist'
import { combineReducers } from 'redux'
import NodeStorage from 'redux-persist-storage-node'
import isDev from 'electron-is-dev'
import { createBlacklistFilter } from 'redux-persist-transform-filter'

import initStore from 'common/lib/initRedux'

export default () => initStore(
  {},
  middleware => {
    if (isDev) {
      middleware.push(
        require('redux-node-logger')()
      )
    }
    return [
      triggerAlias,
      ...middleware,
      forwardToRenderer
    ]
  },
  reducers => persistReducer({
    key: 'kasset',
    debug: isDev,
    storage: new NodeStorage('/tmp/store.json'),
    transforms: [
      createBlacklistFilter('example', ['score'])
    ]},
  combineReducers(reducers))
)
