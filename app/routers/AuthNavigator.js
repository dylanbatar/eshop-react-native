import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
            title: "welcome",
          }}
          name="welcomeScreen"
          component={WelcomeScreen}
        />
        <Stack.Screen
          options={{ title: "Login" }}
          name="loginScreen"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ title: "Register" }}
          name="registerScreen"
          component={RegisterScreen}
        />
      </Stack.Navigator>
    </>
  );
}
