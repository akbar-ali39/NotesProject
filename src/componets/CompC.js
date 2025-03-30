import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { userData } from '../Hooks/UseContext'

const CompC = ({user}) => {
  const newUser=useContext(userData)
  return (
    <View>
      <Text>{newUser.name}</Text>
    </View>
  )
}

export default CompC