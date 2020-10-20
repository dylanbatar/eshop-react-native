import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as yup from "yup";

import AppScreen from "../components/AppScreen/AppScreen";
import {
  AppForm,
  FormField,
  SubmitButton,
  FormGalleryPicker,
  FormPicker,
} from "../components/Forms";
import listingAPI from "../api/listings";
import categoriesAPI from "../api/categories";
import { colors } from "../config/colors";
import { useFetch } from "../hooks/useFetch";
import UploadIndicator from "../components/Indicators/UploadIndicator";

export default function ListinEditScreen() {
  const [imagesCamera, setImagesCamera] = useState([]);
  const [upload, setUpload] = useState({ isUpload: false, progress: 0 });
  const loadCategories = useFetch(categoriesAPI.getCategories);

  const schema = yup.object().shape({
    gallery: yup.array().min(1).max(10).nullable().label("Gallery"),
    title: yup.string().min(1).required().label("Title"),
    price: yup
      .number()
      .typeError("Only numbers valid")
      .min(1)
      .max(10000)
      .required()
      .label("Price"),
    category: yup.object().nullable().required().label("Category"),
    description: yup.string().max(255),
  });

  const pickImage = async () => {
    const { uri, cancelled } = await ImagePicker.launchImageLibraryAsync();
    if (!cancelled) {
      setImagesCamera([...imagesCamera, { image: uri }]);
    }
  };

  const modalDeleteImage = (image) => {
    Alert.alert("Delete image", "Are you sure of delete this image?", [
      {
        text: "Cancel",
      },
      {
        text: "Yes",
        onPress: () =>
          setImagesCamera(imagesCamera.filter((img) => img.image !== image)),
      },
    ]);
  };

  const handlerSubmit = async (item) => {
    const response = await listingAPI.addPost(item, (progress) =>
      setUpload({ progress, isUpload: true })
    );

    if (!response.ok) {
      setUpload({ progress: 0, isUpload: false });
      return alert("Algo malo ha pasado");
    }

    setUpload({ progress: 0, isUpload: false });
    setImagesCamera([]);
  };

  useEffect(() => {
    loadCategories.request();
  }, []);

  return (
    <AppScreen defaultBg>
      <UploadIndicator visible={upload.isUpload} percent={upload.progress} />
      <View style={styles.container}>
        {upload.progress === 0 && (
          <AppForm
            initialValues={{
              title: "",
              price: "",
              category: null,
              description: "",
              gallery: null,
            }}
            onSubmit={handlerSubmit}
            validationSchema={schema}
          >
            <View style={styles.listGallery}>
              <FormGalleryPicker
                items={imagesCamera}
                iconButton="camera-plus"
                onPressButton={pickImage}
                onPressItem={modalDeleteImage}
                name="gallery"
              />
            </View>
            <FormField name="title" placeholder="Title" />
            <FormField
              name="price"
              placeholder="Price"
              keyboardType="phone-pad"
              width={"40%"}
            />
            <FormPicker
              placeholder="Category"
              trailingIcon="chevron-down"
              items={loadCategories.data}
              name="category"
            />
            <FormField multiline name="description" placeholder="Description" />
            <View style={styles.containerButton}>
              <SubmitButton title="POST" color={colors.red} />
            </View>
          </AppForm>
        )}
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  containerButton: {
    marginTop: 10,
  },
  listGallery: {},
});
