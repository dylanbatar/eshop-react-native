import React from 'react';
import { useFormikContext } from 'formik';
import { StyleSheet, View } from 'react-native';
import { AppPicker, ErrorMessage } from '..';

export default function FormPicker({ name, items, ...props }) {
  const { setFieldValue, errors, touched } = useFormikContext();

  return (
    <View>
      <AppPicker
        items={items}
        {...props}
        onSelectedItem={(item) => setFieldValue(name, item)}
      ></AppPicker>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
}

const styles = StyleSheet.create({});
