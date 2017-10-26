import React from 'react'
import { storiesOf } from '@storybook/react'

import Box from 'components/Box'

export default () => {
  storiesOf('Box', module)
    .add('Base', () => <Box><h1>Hello</h1></Box>)
    .add('Row', () =>
      <Box justify='center' pa={20}>
        <Box pa={50}>
          <p>asdasdas asdasd asdasd</p>
        </Box>
        <Box ma={50} pa={60}>
          <p>asdasdas asdasd asdasd</p>
        </Box>
      </Box>
    )
}
