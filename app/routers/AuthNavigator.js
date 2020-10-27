import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import TabNavigator from './TabNavigator';
import AuthContext from '../contexts/AuthContext';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  const { user } = useContext(AuthContext);

  return (
    <>
      {!user ? (
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
              title: 'welcome',
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
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name='tab'
            component={TabNavigator}
          />
        </Stack.Navigator>
      )}
    </>
  );
}
