import React, { useState } from "react";
import * as yup from "yup";
import { StyleSheet, View } from "react-native";

import {
  AppForm,
  ErrorMessage,
  FormField,
  SubmitButton,
} from "../components/Forms";
import { colors } from "../config/colors";
import { useFetch } from "../hooks/useFetch";
import userAPI from "../api/users";
import { useLink } from "../hooks/useLink";

export default function RegisterScreen() {
  const [error, setError] = useState({ message: "", visible: false });
  const register = useFetch(userAPI.register);
  const [navigateByRouter] = useLink();

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    username: yup.string().min(3).required(),
    password: yup.string().min(3).max(16).required(),
  });

  const handlerSubmit = async (newUser) => {
    const response = await register.request({
      name: newUser.username,
      email: newUser.email,
      password: newUser.password,
    });
    if (!response.ok) {
      setError({
        ...error,
        message: response.data.error.toString(),
        visible: true,
      });
      return;
    }

    navigateByRouter("loginScreen");
  };

  return (
    <View style={styles.container}>
      <AppForm
        initialValues={{ email: "", password: "", username: "" }}
        onSubmit={handlerSubmit}
        validationSchema={schema}
      >
        <FormField name="username" icon="account" placeholder="Username" au />
        <FormField
          name="email"
          icon="email"
          placeholder="Email"
          keyboardType="email-address"
        />
        <FormField
          name="password"
          icon="lock"
          placeholder="Password"
          secureTextEntry
        />
        <ErrorMessage visible={error.visible} error={error.message} />
        <View style={styles.containerButton}>
          <SubmitButton title="Register" color={colors.red} />
        </View>
      </AppForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 30,
  },
  containerButton: {
    marginTop: 15,
  },
});
