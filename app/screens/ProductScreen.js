import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import AppScreen from '../components/AppScreen/AppScreen';
import { MiniIconButton } from '../components/Buttons';
import { colors } from '../config/colors';

export default function ProductScreen() {
  return (
    <AppScreen>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <MiniIconButton icon='close' colorIcon={colors.white} />
          <MiniIconButton icon='delete' colorIcon={colors.white} />
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../assets/chair.jpg')}
            resizeMode='contain'
          />
        </View>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.fullDark,
    height: '100%',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  imageContainer: {
    height: '80%',
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
