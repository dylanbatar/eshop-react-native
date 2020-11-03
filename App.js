import React, { useEffect, useState } from "react";
import { AppLoading } from "expo";
import { usePermissions, CAMERA_ROLL } from "expo-permissions";

import AuthContext from "./app/contexts/AuthContext";
import MainNavigator from "./app/routers/MainNavigator";
import secureStore from "./app/store/secureStore";
import { useAuth } from "./app/hooks/useAuth";

export default function App() {
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);

  const [permission, askForPermission] = usePermissions(CAMERA_ROLL, {
    ask: true,
  });

  // modal permision with all permission aren´t granted
  const requestPermission = async () => {
    if (!permission || permission.status !== "granted") {
      await askForPermission();
    }
  };

  const currentUser = async () => {
    const _user = await secureStore.get("token");
    if (!_user) return;

    setUser(_user);
  };

  // handler permission modal
  useEffect(() => {
    requestPermission();
  }, []);

  if (!isReady) {
    return (
      <AppLoading startAsync={currentUser} onFinish={() => setIsReady(true)} />
    );
  }

  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        <MainNavigator />
      </AuthContext.Provider>
    </>
  );
}
