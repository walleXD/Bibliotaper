import { Children } from 'react'
import { StyleSheet } from 'react-native'
import { func } from 'prop-types'

const Peppy = (
  {
    render,
    space,
    flex,
    text,
    ...props
  },
  {
    spaceStyleGenerator,
    flexStyleGenerator,
    textStyleGenerator
  }
) => {
  const {
    spaceStyle,
    flexStyle,
    textStyle
  } = StyleSheet.create({
    spaceStyle: space ? spaceStyleGenerator(props) : {},
    flexStyle: flex ? flexStyleGenerator(props) : {},
    textStyle: text ? textStyleGenerator(props) : {}
  })

  return Children.only(render({
    spaceStyleGenerator,
    textStyleGenerator,
    flexStyleGenerator,
    spaceStyle,
    flexStyle,
    textStyle
  }))
}

Peppy.contextTypes = {
  spaceStyleGenerator: func,
  flexStyleGenerator: func,
  textStyleGenerator: func
}

export default Peppy
