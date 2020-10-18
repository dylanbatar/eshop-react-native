import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function IconComponent({
  icon,
  size = 40,
  backgroundColor = '#000',
  color = '#fff',
}) {
  return (
    <View
      style={[
        styles.iconContainer,
        {
          backgroundColor,
          borderRadius: size / 2,
          width: size,
          height: size,
        },
      ]}
    >
      <MaterialCommunityIcons name={icon} size={size * 0.5} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
