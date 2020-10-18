import React from 'react';
import { StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../config/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function CustomCircleTab({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <MaterialCommunityIcons
        name='plus-circle'
        size={40}
        color={colors.white}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: 70,
    borderRadius: 40,
    backgroundColor: colors.red,
    bottom: 25,
    borderColor: colors.white,
    borderWidth: 5,
  },
});
