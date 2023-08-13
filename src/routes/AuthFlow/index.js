import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Login, ReEnterPassword, TwoFactor} from '../../screens';

const AuthFlow = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="ReEnterPassword" component={ReEnterPassword} />
      <AuthStack.Screen name="TwoFactor" component={TwoFactor} />
    </AuthStack.Navigator>
  );
};
export default AuthFlow;

const styles = StyleSheet.create({});
