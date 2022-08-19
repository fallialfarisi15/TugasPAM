import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../pages/Home'
import Splash from '../pages/Splash'
import Uploadfoto from '../pages/Akun'
import About from '../pages/About'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
    <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} options={{title:'Photo Drive', headerStyle:{backgroundColor:'#61B9D4'},headerTintColor:'#ffffff', headerTitleStyle:{fontWeight:'bold', textAlign:'center'}}}/>
    <Tab.Screen name="Akun" component={Uploadfoto} options={{title:'upload foto' }}/>
    <Tab.Screen name="About" component={About} options={{headerShown: true}}/>
  </Tab.Navigator>
 )
}

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
        <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}}/>

      </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})