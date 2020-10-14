import { useFormikContext } from 'formik';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GalleryPicker from '../../GalleryPicker/GalleryPicker';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default function FormGalleryPicker({ items, name, ...props }) {
  const { errors, setFieldValue, touched } = useFormikContext();

  useEffect(() => {
    setFieldValue(name, items);
  }, [items]);

  return (
    <>
      <GalleryPicker {...props} items={items} />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({});
