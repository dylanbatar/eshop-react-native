import React, { useEffect } from "react";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

import TabNavigator from "./TabNavigator";
import expoPushTokenAPI from "../api/expoPushToken";

export default function AppNavigator() {
  const registerForPushNotificationsAsync = async () => {
    const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (!permission.granted) return;

    const token = await Notifications.getExpoPushTokenAsync();
    console.log(token);
    await expoPushTokenAPI
      .register(token)
      .catch((err) => console.log("Error to register token", err));
  };

  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  return <TabNavigator />;
}
