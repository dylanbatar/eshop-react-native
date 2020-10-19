import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../config/colors';
import LargeButton from '../LargeButton/LargeButton';

export default function RetryConnect({ onPress }) {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>
        Lost connection, press button to retry
      </Text>
      <LargeButton title='Retry' color={colors.red} onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  errorText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
});
