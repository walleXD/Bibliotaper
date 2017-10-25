import React from 'react'
import { Text } from 'react-native'
import { string } from 'prop-types'

const Heading = ({children, ...props}) => {
  return (
    <Text {...props}>{children}</Text>
  )
}

Heading.propTypes = {
  children: string
}

export default Heading
