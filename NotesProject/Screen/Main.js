import { View, Text } from 'react-native'
import React, { createContext } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomScreen from './Drawer/DrawerScreen';
import { useRoute } from '@react-navigation/native';

const Drawer=createDrawerNavigator();
export const UserCotext=createContext()

const Main = () => {
  const route=useRoute()
  return (
    <UserCotext.Provider value={route.params.data}>
      <Drawer.Navigator>
      <Drawer.Screen name='Bottom' component={BottomScreen}/>
    </Drawer.Navigator>
    </UserCotext.Provider>
  ) 
}

export default Main