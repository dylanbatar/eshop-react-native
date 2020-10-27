import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import AuthContext from "../contexts/AuthContext";
import AppNavigator from "./AppNavigator";

export default function MainNavigator() {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!user ? <AuthNavigator /> : <AppNavigator />}
    </NavigationContainer>
  );
}
