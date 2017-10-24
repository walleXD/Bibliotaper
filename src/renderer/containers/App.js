import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from '@/pages/home'
import ExamplePage from '@pages/example'

const App = () =>
  <Switch>
    <Route path='/' component={HomePage} exact />
    <Route path='/example' component={ExamplePage} />
  </Switch>

export default App
