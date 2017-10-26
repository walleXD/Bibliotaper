import React from 'react'
import { Text, Button } from 'react-native'
import Box from '../components/Box'

const HomePage = () =>
  <Box pa={100} ml={100}>
    <Text>Home Page</Text>
    <Button
      onPress={() => console.log('hello')}
      title='sup'
    />
  </Box>

export default HomePage
