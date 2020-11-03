import React from 'react'
import { View, Text } from 'react-native'
import { Gutters, Layout } from '@/Theme'

const IndexHomeContainer = () => {
  return (
    <View style={[Layout.fill, Layout.colCenter, Gutters.smallHPadding]}>
      <Text>Main</Text>
    </View>
  )
}

export default IndexHomeContainer
