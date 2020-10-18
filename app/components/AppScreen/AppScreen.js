import React from 'react';
import { Platform, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { colors } from '../../config/colors';

export default function AppScreen({ children, defaultBg }) {
  return (
    <SafeAreaView
      style={[
        styles.container,
        defaultBg
          ? { backgroundColor: colors.white }
          : { backgroundColor: colors.lightGrey },
      ]}
    >
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 30 : StatusBar.currentHeight,

    flex: 1,
  },
});
