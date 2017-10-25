import React from 'react'
import { storiesOf } from '@storybook/react'

import Fixed from 'components/Fixed'

export default () => {
  storiesOf('Fixed', module)
    .add('Fixed to Bottom', () =>
      <Fixed top={2000}>
        <p>Hello</p>
      </Fixed>
    )
}
