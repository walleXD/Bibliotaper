import React from 'react'
import { View, StyleSheet } from 'react-native'
import { node, bool, string, number } from 'prop-types'
import { marginStyleGenerator, flexStyleGenerator, paddingStyleGenerator } from '../lib/styleGenerator'

const Box = ({ children, style, ...props }) => {
  const { flex, margin, padding } = StyleSheet.create({
    flex: {
      ...flexStyleGenerator(props)
    },
    margin: {
      ...marginStyleGenerator(props)
    },
    padding: {
      ...paddingStyleGenerator(props)
    }
  })

  return (
    <View style={[style, flex, margin, padding]} {...props}>
      {children}
    </View>
  )
}

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
