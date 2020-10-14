import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
export default function MiniIconButton({
  width = 40,
  height = 40,
  color,
  icon,
  colorIcon,
  size = 32,
  onPress,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[styles.container, { backgroundColor: color, height, width }]}
      >
        <MaterialIcons name={icon} size={size} color={colorIcon} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
