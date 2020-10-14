import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Separator({ style }) {
  return <View style={[style, styles.container]}></View>;
}

const styles = StyleSheet.create({
  container: {
    height: 1,
  },
});
