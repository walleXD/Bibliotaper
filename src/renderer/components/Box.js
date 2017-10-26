import React from 'react'
import { View } from 'react-native'
import { node, bool, string, number } from 'prop-types'

import Peppy from './Peppy'

const Box = ({ children, style, ...props }) =>
  <Peppy
    space
    {...props}
    render={({spaceStyle, flexStyle}) =>
      <View style={[style, spaceStyle, flexStyle]} {...props}>
        {children}
      </View>
    }
  />

Box.propTypes = {
  children: node.isRequired,
  style: View.propTypes.style,
  justify: string,
  align: string,
  width: number,
  wrap: bool,
  direction: string
}

export default Box
