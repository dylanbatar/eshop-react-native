import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../config/colors';

export default function ErrorMessage({ visible, error }) {
  if (!visible || !error) return null;

  return (
    <View>
      <Text style={styles.textError}>{error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textError: {
    color: colors.red,
  },
});
