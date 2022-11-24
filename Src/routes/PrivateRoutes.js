import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DetailScreen, Home} from '../screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Bottomtab } from './Layouts';
const Stack = createNativeStackNavigator();
const PrivateRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="Bottomtab">
      <Stack.Screen
        name="Bottomtab"
        component={Bottomtab}
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{
          headerShown: true,
        }}
      /> */}
    </Stack.Navigator>
  );
};

export default PrivateRoutes;

const styles = StyleSheet.create({});
