import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, SearchBar } from "react-native-elements";

import Action from "../../components/home/Action";

export default function HomeScreen() {
  return (
    <SafeAreaView style={style.main}>
      <View style={style.header}>
        <View>
          <Text style={{ fontSize: 25, color:"white" }}>Hola, 9 DE JULIO SERVICIOS SRL</Text>
        </View>
        <View style={style.actions}>
          <Action action="new" />
          <Action action="opens" />
          <Action action="confirms" />
        </View>
      </View>
      <View style={style.container}>
        <SearchBar
          lightTheme="true"
          inputContainerStyle={style.input_search}
          placeholder="Type Here..."
        />
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  main: {
    flex: 1,
    top:0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  header: {
    width: "100%",
    height: 200,
    backgroundColor:"#6CA6C1",
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
    transform: [{ scaleX: 1 }],
  },
  actions: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    top: -5
  },
  container: {
    flex: 1,
    marginTop:5
  },
  input_search: {
    backgroundColor: "white",
    width: 300,
  },
});
