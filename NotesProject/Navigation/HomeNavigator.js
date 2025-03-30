import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Screen/Bottom/Home';
import EditNote from '../Screen/EditNote';

const HomeStack=createStackNavigator();
const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
        <HomeStack.Screen name='Home' component={Home} options={{headerShown:false}}/>
        <HomeStack.Screen name='EditNote' component={EditNote} options={{headerShown:false}}/>
    </HomeStack.Navigator>
  )
}

export default HomeNavigator