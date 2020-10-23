import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import { colors } from '../../config/colors';

export default function Card({ image, title, subtitle }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image tint='light' style={styles.image} uri={image} preview={20} />
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: colors.white,
    shadowColor: colors.fullDark,
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  imageContainer: {
    width: '100%',
    overflow: 'hidden',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  bodyContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  title: {
    fontSize: 19,
  },
  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: colors.bluegreen,
  },
});
