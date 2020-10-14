import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function LargeButton({
  color,
  title,
  colorText = '#fff',
  onPress,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, { backgroundColor: color }]}>
        <Text style={[styles.textButton, { color: colorText }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginBottom: 12,
  },

  textButton: {
    fontSize: 18,
    fontWeight: '600',
  },
});
