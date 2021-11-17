import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import AuthNavigation from "./src/navigation/AuthNavigation";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
