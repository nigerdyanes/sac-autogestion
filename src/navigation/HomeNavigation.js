import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home/HomeScreen";

const Stack = createStackNavigator();


export default function HomeNavigation() {
    return (
       <Stack.Navigator>
           <Stack.Screen
             component={HomeScreen}
             name="Home"
             options={{ title: "", headerTransparent:"true" }}
           />
       </Stack.Navigator>
    )
}
