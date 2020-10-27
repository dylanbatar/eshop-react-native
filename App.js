import React, { useEffect, useReducer } from 'react';
import { usePermissions, CAMERA_ROLL } from 'expo-permissions';

import AuthContext from './app/contexts/AuthContext';
import SecureStore from './app/store/secureStore';
import MainNavigator from './app/routers/MainNavigator';
import { authReducer } from './app/reducers/authReducer';

// check store has an user token
const initUser = async () => {
  const token = await SecureStore.get('token');
  console.log(token);
  if (token) return { user: token, logged: true };

  return { user: null, logged: false };
};

export default function App() {
  const [permission, askForPermission] = usePermissions(CAMERA_ROLL, {
    ask: true,
  });

  const [authUser, dispatchAuthUser] = useReducer(authReducer, {}, initUser);

  // modal permision with all permission aren´t granted
  const requestPermission = async () => {
    if (!permission || permission.status !== 'granted') {
      await askForPermission();
    }
  };

  useEffect(() => {
    requestPermission();
  });

  return (
    <>
      <AuthContext.Provider value={{ authUser, dispatchAuthUser }}>
        <MainNavigator />
      </AuthContext.Provider>
    </>
  );
}
