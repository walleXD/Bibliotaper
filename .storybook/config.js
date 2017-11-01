import React from 'react'
import { configure, addDecorator } from '@storybook/react'

import PeppyProvider from '@/containers/PeppyProvider'

addDecorator(story =>
  <PeppyProvider>
    {story()}
  </PeppyProvider>
)

function loadStories() {
  require('../src/stories')
}

configure(loadStories, module)
