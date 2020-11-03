import expoPushTokenAPI from "../api/expoPushToken";
import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

export const useNotification = () => {
  const registerForPushNotificationsAsync = async (notificationListener) => {
    const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (!permission.granted) return;

    const token = await Notifications.getExpoPushTokenAsync();

    await expoPushTokenAPI
      .register(token)
      .catch((err) => console.log("Error to register token", err));
  };

  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);
};
