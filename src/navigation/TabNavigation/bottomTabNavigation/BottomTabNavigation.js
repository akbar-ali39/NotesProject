import { View, Text, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screen/Home';
import Search from './screen/Search';
import AddPost from './screen/AddPost';
import Favorites from './screen/Favorites';
import Profile from './screen/Profile';

const BottomTab=createBottomTabNavigator()

const BottomTabNavigation = () => {
  return (
    <NavigationContainer>
        <BottomTab.Navigator screenOptions={{tabBarStyle:{
            height:80
        }}}>
            <BottomTab.Screen name='Home' 
            component={Home}
            options={{headerShown:false,tabBarIcon:({size,color})=>{
                return(
                    <Image source={require('../../../images/home.png')} style={{height:size,width:size,tintColor:color}}/>
                )
            }}}
             />
            <BottomTab.Screen name='Search' component={Search}
             options={{headerShown:false,tabBarIcon:({size,color})=>{
                return(
                    <Image source={require('../../../images/Search.png')} style={{height:size,width:size,tintColor:color}}/>
                )
            }}}
            />
            <BottomTab.Screen name='AddPost' component={AddPost}
             options={{headerShown:false,tabBarIcon:({size,color})=>{
                return(
                    <Image source={require('../../../images/more.png')} style={{height:size,width:size,tintColor:color}}/>
                )
            }}}
            />
            <BottomTab.Screen name='Favorites' component={Favorites}
             options={{headerShown:false,tabBarIcon:({size,color})=>{
                return(
                    <Image source={require('../../../images/heart.png')} style={{height:size,width:size,tintColor:color}}/>
                )
            }}}
            />
            <BottomTab.Screen name='Profile' component={Profile}
             options={{headerShown:false,tabBarIcon:({size,color})=>{
                return(
                    <Image source={require('../../../images/profile.png')} style={{height:size,width:size,tintColor:color}}/>
                )
            }}}
            />
        </BottomTab.Navigator>
    </NavigationContainer>
  )
}

export default BottomTabNavigation