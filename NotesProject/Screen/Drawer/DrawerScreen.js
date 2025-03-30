import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AddNotes from '../Bottom/AddNotes'
import HomeNavigator from '../../Navigation/HomeNavigator'


const Bottom=createBottomTabNavigator()

const BottomScreen = () => {
  return (
    <Bottom.Navigator screenOptions={{tabBarShowLabel:false,tabBarStyle: {
        backgroundColor: '#ffffff', // Change background color
        height: 60, // Increase tab bar height
        paddingBottom: 10, // Adjust padding
        borderTopLeftRadius: 20, // Rounded corners
        borderTopRightRadius: 20,
        shadowColor: '#000', // Add shadow
        shadowOpacity: 0.9,
        elevation: 5, // Android shadow
      },}}>
        <Bottom.Screen name='Home' component={HomeNavigator} options={{headerShown:false,tabBarIcon:({size,focused,color})=>(
            <Image source={require('../../Images/home.png')} style={{width:size,height:size,tintColor:focused?'#4e2475':'black'}}/>
        )}}/>
        <Bottom.Screen name='AddNotes' component={AddNotes}  options={{headerShown:false,tabBarIcon:({size,focused,color})=>(
            <Image source={require('../../Images/add.png')} style={{height:size,width:size,tintColor:focused?'#4e2475':'black'}}/>
        )}}/>

    </Bottom.Navigator>
  )
}

export default BottomScreen