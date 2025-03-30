import { View, Text } from 'react-native'
import React from 'react'
import CompB from './CompB'

const ComA = ({user}) => {
  return (
    <View>
      <Text>{user.email}</Text>
      <CompB user={user}/>
    </View>
  )
}

export default ComA