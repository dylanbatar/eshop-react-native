import React from 'react';
import { ImageBackground, StyleSheet, Image, Text, View } from 'react-native';
import { LargeButton } from '../components/Buttons';
import { colors } from '../config/colors';
import { useLink } from '../hooks/useLink';

export default function WelcomeScreen() {
  const [navigateToRoute] = useLink();
  return (
    <ImageBackground
      blurRadius={2}
      style={styles.backdrop}
      resizeMode='cover'
      source={require('../assets/background.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text>Sell What You Want</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <LargeButton
          onPress={() => navigateToRoute('loginScreen')}
          color={colors.bluegreen}
          title='Login'
        />
        <LargeButton
          onPress={() => navigateToRoute('registerScreen')}
          color={colors.red}
          title='Register'
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
  },
  logoContainer: {
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
    top: 100,
  },
  logo: {
    height: 100,
    width: 100,
  },
  buttonsContainer: {
    justifyContent: 'flex-end',
    height: '100%',
    marginHorizontal: 10,
  },
});
