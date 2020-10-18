import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name='welcomeScreen'
        component={WelcomeScreen}
      />
      <Stack.Screen
        options={{ title: 'Login' }}
        name='loginScreen'
        component={LoginScreen}
      />
      <Stack.Screen
        options={{ title: 'Register' }}
        name='registerScreen'
        component={RegisterScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name='tab'
        component={TabNavigator}
      />
    </Stack.Navigator>
  );
}
