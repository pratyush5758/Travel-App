import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DetailScreen, Home } from '../../screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation'
const Tab = createBottomTabNavigator();
const Bottomtab = () => {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false
    }}>
        <Tab.Screen name="Home" component={Home} options={{
            headerShown:false,
          tabBarIcon:({ color, size }) => (
            <Ionicons name='home' size={size} color={color}/>
          ),
          tabBarLabelStyle:{
            fontSize:20
          }
          
        }}/>
        <Tab.Screen name="DetailScreen" component={DetailScreen} options={{
            tabBarLabel:'Explore',
          tabBarIcon:({ color, size }) => (
            <Foundation name='web' size={size} color={color}/>
          ),
          tabBarLabelStyle:{
            fontSize:20
          }
        }}/>
    </Tab.Navigator>
  )
}

export default Bottomtab

const styles = StyleSheet.create({})