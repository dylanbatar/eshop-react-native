import React, { useEffect } from 'react';
import { usePermissions, CAMERA_ROLL } from 'expo-permissions';
import MainNavigator from './app/routers/MainNavigator';

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

  return <MainNavigator />;
}
