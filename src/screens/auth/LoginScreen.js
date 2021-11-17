import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Login from "../../components/auth/Login";

export default function LoginScreen() {
  return (
    <SafeAreaView style={{ flex:1, justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
        <Login />
    </SafeAreaView>
  );
}

