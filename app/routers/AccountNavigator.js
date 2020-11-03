import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import MessageScreen from "../screens/MessageScreen";
import myListings from "../screens/myListings";

const Stack = createStackNavigator();

export default function AccountNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ title: "Account" }}
        name="account"
        component={AccountScreen}
      />
      <Stack.Screen
        options={{ title: "My Listings" }}
        name="myListings"
        component={myListings}
      />
      <Stack.Screen
        options={{ title: "My Messages" }}
        name="message"
        component={MessageScreen}
      />
    </Stack.Navigator>
  );
}
