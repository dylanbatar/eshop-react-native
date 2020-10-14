import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as yup from 'yup';

import { AppForm, FormField, SubmitButton } from '../components/Forms';
import FormGalleryPicker from '../components/Forms/FormGalleryPicker/FormGalleryPicker';
import AppScreen from '../components/AppScreen/AppScreen';
import FormPicker from '../components/Forms/FormPicker/FormPicker';
import { colors } from '../config/colors';

export default function ListinEditScreen() {
  const [imagesCamera, setImagesCamera] = useState([]);

  const schema = yup.object().shape({
    gallery: yup.array().min(1).max(10).nullable().label('Gallery'),
    title: yup.string().min(1).required().label('Title'),
    price: yup
      .number()
      .typeError('Only numbers valid')
      .min(1)
      .max(10000)
      .required()
      .label('Price'),
    category: yup.object().nullable().required().label('Category'),
    description: yup.string().max(255),
  });

  const CATEGORIES = [
    { title: 'Tecnology', id: 1 },
    { title: 'Cameras', id: 2 },
    { title: 'Clothes', id: 3 },
    { title: 'Accesories', id: 4 },
    { title: 'Foot', id: 5 },
  ];

  const pickImage = async () => {
    const { uri, cancelled } = await ImagePicker.launchImageLibraryAsync();
    if (!cancelled) {
      setImagesCamera([...imagesCamera, { image: uri }]);
    }
  };

  const modalDeleteImage = (image) => {
    Alert.alert('Delete image', 'Are you sure of delete this image?', [
      {
        text: 'Cancel',
      },
      {
        text: 'Yes',
        onPress: () =>
          setImagesCamera(imagesCamera.filter((img) => img.image !== image)),
      },
    ]);
  };

  const deleteImage = (image) => {};

  return (
    <AppScreen defaultBg>
      <View style={styles.container}>
        <AppForm
          initialValues={{
            title: '',
            price: '',
            category: null,
            description: '',
            gallery: null,
          }}
          onSubmit={(v) => console.log(v)}
          validationSchema={schema}
        >
          <View style={styles.listGallery}>
            <FormGalleryPicker
              items={imagesCamera}
              iconButton='camera-plus'
              onPressButton={pickImage}
              onPressItem={modalDeleteImage}
              name='gallery'
            />
          </View>
          <FormField name='title' placeholder='Title' />
          <FormField
            name='price'
            placeholder='Price'
            keyboardType='phone-pad'
            width={'40%'}
          />
          <FormPicker
            placeholder='Category'
            trailingIcon='chevron-down'
            items={CATEGORIES}
            name='category'
          />
          <FormField multiline name='description' placeholder='Description' />
          <View style={styles.containerButton}>
            <SubmitButton title='POST' color={colors.red} />
          </View>
        </AppForm>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  containerButton: {
    marginTop: 10,
  },
  listGallery: {},
});
