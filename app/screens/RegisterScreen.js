import React from 'react';
import * as yup from 'yup';
import { StyleSheet, View, Text } from 'react-native';

import { AppForm, FormField, SubmitButton } from '../components/Forms';
import { colors } from '../config/colors';

export default function RegisterScreen() {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    username: yup.string().min(3).required(),
    password: yup.string().min(3).max(16).required(),
  });

  return (
    <View style={styles.container}>
      <AppForm
        initialValues={{ email: '', password: '', username: '' }}
        onSubmit={(v) => console.log(v)}
        validationSchema={schema}
      >
        <FormField name='username' icon='account' placeholder='Username' />
        <FormField
          name='email'
          icon='email'
          placeholder='Email'
          keyboardType='email-address'
        />
        <FormField
          name='password'
          icon='lock'
          placeholder='Password'
          secureTextEntry
        />
        <View style={styles.containerButton}>
          <SubmitButton title='Register' color={colors.red} />
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
