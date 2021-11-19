import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/auth/LoginScreen";
import HomeScreen from "../screens/home/HomeScreen";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        component={LoginScreen}
        name="Login"
        options={{ title: "", headerTransparent: "true" }}
      />
      <Stack.Screen
        component={HomeScreen}
        name="Home"
        options={{ title: "", headerTransparent: "true" }}
      />
    </Stack.Navigator>
  );
}
