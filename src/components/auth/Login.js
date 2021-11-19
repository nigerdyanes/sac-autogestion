import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Image } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import { useFormik } from "formik";

const LoginImage = require("../../assets/img/logo_login.png");

export default function Login() {
  const navigation = useNavigation();
  const [error, setError] = useState(null);
  
  const formik = useFormik({
    initialValues: initialValues(),
    onSubmit: (formValues) => {
      console.log(formValues);
      for (const value in formValues) {
        if (formValues[value] === "") {
          setError(true);
        }
      }

      navigation.navigate("Home");

      setTimeout(() => {
        setError(false);
      }, 4000);
    },
  });

  return (
    <View>
      <View style={style.card__main}>
        <Image source={LoginImage} style={style.card__image} />
        <Input
          placeholder="Usuario"
          inputContainerStyle={style.card__input}
          rightIcon={{ type: "font-awesome", name: "user" }}
          value={formik.values.user}
          autoCapitalize="characters"
          onChangeText={(user) => formik.setFieldValue("user", user)}
        />
        <Input
          placeholder="Password"
          inputContainerStyle={style.card__input}
          rightIcon={{ type: "font-awesome", name: "lock" }}
          value={formik.values.password}
          onChangeText={(password) =>
            formik.setFieldValue("password", password)
          }
          secureTextEntry={true}
        />
        <Button
          title="Ingresar"
          buttonStyle={style.card__btn__login}
          onPress={() => formik.handleSubmit()}
        />
        {error ? (
          <Text style={style.card__input__error}>
            Por favor ingrese sus credenciales.
          </Text>
        ) : null}
      </View>
      <View style={style.footer}>
        <Text style={style.footer__title}>Power by Focasoftware</Text>
      </View>
    </View>
  );
}

function initialValues() {
  return {
    user: "",
    password: "",
  };
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
  card__input__error: {
    marginTop: 15,
    color: "red",
  },
  footer: {
    alignItems: "center",
    bottom: 5,
  },
  footer__title: {
    fontSize: 15,
  },
});
