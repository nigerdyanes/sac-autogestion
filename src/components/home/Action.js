import React from "react";
import { View } from "react-native";
import { Avatar, Text } from "react-native-elements";

export default function Action(props) {
  const { action } = props;
  return (
    <View style={{ justifyContent: "center", alignItems: "center", margin: 5 }}>
      <Avatar
        size={80}
        rounded
        overlayContainerStyle={{ backgroundColor: "#0077b6" }}
        icon={{
          type: "font-awesome",
          color: "white",
          name: setIconByName(action),
        }}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
      />
      <Text style={{ color:"white", alignSelf:"center" }}>{`${setName(action)}`}</Text>
    </View>
  );
}

function setName(name) {
  switch (name) {
    case "new":
      return "Cargar";
    case "opens":
      return "Abiertas";
    case "confirms":
      return "A Confirmar";
  }
}

function setIconByName(name) {
  switch (name) {
    case "new":
      return "plus";
    case "opens":
      return "list-alt";
    case "confirms":
      return "exclamation";
  }
}
