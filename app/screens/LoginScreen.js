import React from 'react';
import * as yup from 'yup';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';

import { AppForm, FormField, SubmitButton } from '../components/Forms';
import { colors } from '../config/colors';
import { useLink } from '../hooks/useLink';

export default function LoginScreen() {
  const [navigateToRoute] = useLink();

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(3).required().trim(),
  });

  return (
    <SafeAreaView>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      </View>
      <View style={styles.form}>
        <AppForm
          initialValues={{ email: 'dylanbatar2@gmail.com', password: '12312' }}
          onSubmit={() => navigateToRoute('tab')}
          validationSchema={schema}
        >
          <FormField
            placeholder='Email'
            keyboardType='email-address'
            autoCompleteType='off'
            textContentType='emailAddress'
            icon='account'
            name='email'
          />
          <FormField
            placeholder='Password'
            numberOfLines={1}
            secureTextEntry
            icon='lock'
            name='password'
          />
          <View style={styles.buttonContainer}>
            <SubmitButton title='Login' color={colors.red} />
          </View>
        </AppForm>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
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
