import React from "react";
import { useNotification } from "../hooks/useNotIfications";
import TabNavigator from "./TabNavigator";

export default function AppNavigator() {
  useNotification();
  return <TabNavigator />;
}
