import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Button, Input, Text } from "react-native-elements";

const LoginImage = require("../../assets/img/logo_login.png");

export default function Login() {
  return (
    <View>
      <View style={style.card__main}>
        <Image source={LoginImage} style={style.card__image} />
        <Input
          placeholder="Usuario"
          inputContainerStyle={style.card__input}
          rightIcon={{ type: "font-awesome", name: "user" }}
        />
        <Input
          placeholder="Password"
          inputContainerStyle={style.card__input}
          rightIcon={{ type: "font-awesome", name: "lock" }}
          secureTextEntry={true}
        />
        <Button title="Ingresar" buttonStyle={style.card__btn__login} />
      </View>
      <View style={style.footer}>
        <Text style={style.footer__title}>Power by Focasoftware</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  card__main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 250,
  },
  card__image: {
    marginBottom: 10,
  },
  card__input: {
    borderColor: "gray",
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  card__btn__login: {
    width: 200,
    backgroundColor: "#4895ef",
  },
  footer: {
    alignItems: "center", bottom: 5 
  },
  footer__title: {
    fontSize: 15
  }
});
