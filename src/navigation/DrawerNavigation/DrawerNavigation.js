import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../DrawerNavigation/Screen/Home.js';
import Settings from '../DrawerNavigation/Screen/Settings.js'
import Chats from './Screen/Chats.js'
import HelpSupport from './Screen/HelpSupport.js'
import {Image, Text, View} from 'react-native';
import CustomeDrawer from './CustomeDrawer.js';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
        drawerActiveBackgroundColor:'#f2f2f2',
        drawerStyle:{
          backgroundColor:'orange'
        }
      }} drawerContent={(props)=><CustomeDrawer {...props}/>}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            drawerIcon: ({size, focused}) => {
              return (
                <Image
                  source={require('../../images/home.png')}
                  style={{
                    width: size,
                    height: size,
                    tintColor: focused ? 'blue' : 'black',
                  }}
                />
              );
            },
            drawerLabel:({size,focused})=>{
              return(
                <View>
                  <Text style={{color:focused ? 'blue' : 'white' , fontSize:20}}>{'Home'}</Text>
                </View>
              )
            }
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{
            drawerIcon: ({size, focused}) => {
              return (
                <Image
                  source={require('../../images/settings.png')}
                  style={{
                    height: size,
                    width: size,
                    tintColor: focused ? 'blue' : 'black',
                  }}
                />
              );
            },
            drawerLabel:({size,focused})=>{
              return(
                <View>
                  <Text style={{color:focused ? 'blue' : 'white', fontSize:20, }}>{"Setting"}</Text>
                </View>
              )
            }
          }}
        />
        <Drawer.Screen
          name="Chats"
          component={Chats}
          options={{
            drawerIcon: ({size, focused}) => {
              return (
                <Image
                  source={require('../../images/chat.png')}
                  style={{
                    height: size,
                    width: size,
                    tintColor: focused ? 'blue' : 'black',
                  }}
                />
              );
            },
            drawerLabel:({size,focused})=>{
              return(
                <View>
                  <Text style={{color:focused ? 'blue' : 'white', fontSize:20}}>{'Chats'}</Text>
                </View>
              )
            }
          }}
        />
        <Drawer.Screen
          name="HelpSupport"
          component={HelpSupport}
          options={{
            drawerIcon: ({size, focused}) => {
              return (
                <Image
                  source={require('../../images/help.png')}
                  style={{
                    width: size,
                    height: size,
                    tintColor: focused ? 'blue' : 'green',
                  }}
                />
              );
            },
            drawerLabel:({size,focused})=>{
              return(
                <View>
                  <Text style={{color: focused ? 'blue' : 'white', fontSize:20}}>{'Help Support'}</Text>
                </View>
              )
            }
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;
