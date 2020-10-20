import { useFormikContext } from "formik";
import React, { useEffect } from "react";
import GalleryPicker from "../../GalleryPicker/GalleryPicker";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function FormGalleryPicker({ items, name, ...props }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  useEffect(() => {
    setFieldValue(name, items);
  }, [items]);

  return (
    <>
      <GalleryPicker {...props} items={items} value={values[name]} />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
