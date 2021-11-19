import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/auth/LoginScreen";

const Stack = createStackNavigator();

export default function AuthNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={LoginScreen}
        name="Login"
        options={{ title: "", headerTransparent:"true" }}
      />
    </Stack.Navigator>
  );
}
