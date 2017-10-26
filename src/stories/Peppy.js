import React from 'react'
import { storiesOf } from '@storybook/react'
import { Text } from 'react-native'

import Peppy from 'components/Peppy'

export default () => {
  storiesOf('Peppy', module)
    .add('Dynamic Padding', () =>
      <Peppy
        space
        pa={50}
        mt={100}
        render={({spaceStyle}) =>
          <Text style={spaceStyle}>
            Hello
          </Text>}
      />
    )
}
