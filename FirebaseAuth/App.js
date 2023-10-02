/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Login';
import Home from './src/Home';
import Signup from './src/Signup';
import Mobilenumber from './src/Mobilenumber';
import Animations from './src/Animaton';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* firebase email/password auth */}
        {/* <Stack.Screen name="Login" component={Login}  /> */}
        {/* firebase phone auth */}
        {/* <Stack.Screen name="mobile" component={Mobilenumber}  /> */}
        <Stack.Screen name="animation" component={Animations}  />
        <Stack.Screen name="Home" component={Home}  />
        <Stack.Screen name="Signup" component={Signup}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App

// const styles = StyleSheet.create({})