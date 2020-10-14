import React from 'react';
import { useFormikContext } from 'formik';

import AppTextInput from '../AppTextInput/AppTextInput';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default function FormField({ name, width, ...props }) {
  const { handleChange, values, touched, errors } = useFormikContext();

  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        value={values[name]}
        width={width}
        {...props}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
