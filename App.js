import React, { useEffect } from 'react';
import { usePermissions, CAMERA_ROLL } from 'expo-permissions';
import ListinEditScreen from './app/screens/ListinEditScreen';
import { Button, Text, View } from 'react-native';
import AppScreen from './app/components/AppScreen/AppScreen';

export default function App() {
  const [permission, askForPermission] = usePermissions(CAMERA_ROLL, {
    ask: true,
  });

  const requestPermission = async () => {
    if (!permission || permission.status !== 'granted') {
      await askForPermission();
    }
  };

  useEffect(() => {
    requestPermission();
  });

  return <ListinEditScreen />;
}
