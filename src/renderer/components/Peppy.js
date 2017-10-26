import { Children } from 'react'
import { StyleSheet } from 'react-native'

import spaceStyleGen from '../lib/dynamicStylesheet/space'
import flexStyleGen from '../lib/dynamicStylesheet/flex'

const Peppy = ({render, space, flex, ...props}) => {
  const { spaceStyle, flexStyle } = StyleSheet.create({
    spaceStyle: space ? spaceStyleGen(props) : {},
    flexStyle: flex ? flexStyleGen(props) : {}
  })
  console.log('peppy', spaceStyle)
  return Children.only(render({
    spaceStyle,
    flexStyle
  }))
}

export default Peppy
