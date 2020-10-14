import React from 'react';
import { useFormikContext } from 'formik';
import LargeButton from '../../Buttons/LargeButton/LargeButton';

export default function SubmitButton({ title, ...props }) {
  const { handleSubmit } = useFormikContext();

  return <LargeButton title={title} {...props} onPress={handleSubmit} />;
}
