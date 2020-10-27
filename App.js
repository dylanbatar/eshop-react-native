import React, { useEffect, useState } from 'react';
import { usePermissions, CAMERA_ROLL } from 'expo-permissions';

import AuthContext from './app/contexts/AuthContext';
import MainNavigator from './app/routers/MainNavigator';
import secureStore from './app/store/secureStore';

export default function App() {
  const [permission, askForPermission] = usePermissions(CAMERA_ROLL, {
    ask: true,
  });

  const [user, setUser] = useState();

  // modal permision with all permission aren´t granted
  const requestPermission = async () => {
    if (!permission || permission.status !== 'granted') {
      await askForPermission();
    }
  };

  const currentUser = async () => {
    const user = await secureStore.get('token');
    setUser(user);
  };

  useEffect(() => {
    requestPermission();
  });

  useEffect(() => {
    currentUser();
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        <MainNavigator />
      </AuthContext.Provider>
    </>
  );
}
