import React from 'react'
import { View, StyleSheet } from 'react-native'
import { node } from 'prop-types'

const fixedStyleGenerator = ({
  left,
  right,
  top,
  bottom,
  z
}) => {
  return {
    position: 'absolute',
    left: left || 0,
    right: right || 0,
    top: top || 0,
    bottom: bottom || 0,
    zIndex: z || 0
  }
}

const Fixed = ({style, children, ...props}) => {
  const { fixed } = StyleSheet.create({
    fixed: { ...fixedStyleGenerator(props) }
  })
  return (
    <View style={[style, fixed]} {...props}>
      {children}
    </View>
  )
}

Fixed.propTypes = {
  style: View.propTypes.style,
  children: node
}

export default Fixed
