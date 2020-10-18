import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ListinEditScreen from '../screens/ListinEditScreen';
import AccountNavigator from './AccountNavigator';
import StackNavigator from './StackNavigator';

import { colors } from '../config/colors';
import CustomCircleTab from './CustomCircleTab';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator tabBarOptions={{ activeTintColor: colors.red }}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name='home' size={size} color={color} />
          ),
        }}
        name='productsScreen'
        component={StackNavigator}
      />
      <Tab.Screen
        options={({ navigation }) => ({
          tabBarButton: () => (
            <CustomCircleTab
              onPress={() => navigation.navigate('editScreen')}
            />
          ),
        })}
        name='editScreen'
        component={ListinEditScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name='account' size={size} color={color} />
          ),
        }}
        name='account'
        component={AccountNavigator}
      />
    </Tab.Navigator>
  );
}
