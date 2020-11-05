import React, { useContext, useState } from "react";
import * as yup from "yup";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";

import {
  AppForm,
  ErrorMessage,
  FormField,
  SubmitButton,
} from "../components/Forms";
import authAPI from "../api/auth";
import { colors } from "../config/colors";
import { useFetch } from "../hooks/useFetch";
import { useAuth } from "../hooks/useAuth";
import LoadingIndicator from "../components/Indicators/LoadingIndicator";

export default function LoginScreen() {
  const [authError, setAuthError] = useState(false);
  const [loading, setLoading] = useState(false);

  const auth = useAuth();
  const login = useFetch(authAPI.login);

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(3).required().trim(),
  });

  const handlerSubmit = async (user) => {
    setLoading(true);
    const response = await login.request(user);
    console.log(user);
    if (!response.ok) {
      setAuthError(true);
      return;
    }
    setAuthError(false);
    auth.login(response.data);
    setLoading(false);
  };

  return (
    <SafeAreaView>
      <LoadingIndicator visible={loading && !authError} />
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      </View>
      <View style={styles.form}>
        <AppForm
          initialValues={{ email: "mosh@domain.com", password: "12345" }}
          onSubmit={handlerSubmit}
          validationSchema={schema}
        >
          <FormField
            placeholder="Email"
            keyboardType="email-address"
            autoCompleteType="off"
            textContentType="emailAddress"
            icon="account"
            name="email"
          />
          <FormField
            placeholder="Password"
            numberOfLines={1}
            secureTextEntry
            icon="lock"
            name="password"
          />
          <ErrorMessage
            error="Email or password is no valid"
            visible={authError}
          />
          <View style={styles.buttonContainer}>
            <SubmitButton title="Login" color={colors.red} />
          </View>
        </AppForm>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 90,
    height: 90,
  },
  form: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  buttonContainer: {
    marginTop: 10,
  },
});
