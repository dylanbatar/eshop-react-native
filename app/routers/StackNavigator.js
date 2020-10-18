import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListingDetailScreen from '../screens/ListingDetailScreen';
import ListingProductsScreen from '../screens/ListingProductsScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      mode='modal'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='productsScreen' component={ListingProductsScreen} />
      <Stack.Screen name='detailScreen' component={ListingDetailScreen} />
    </Stack.Navigator>
  );
}
