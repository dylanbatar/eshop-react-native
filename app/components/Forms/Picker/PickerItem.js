import React from 'react';
import { TouchableWithoutFeedback, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../config/colors';

export default function PickerItem({ title, icon, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Text numberOfLines={1}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    width: 80,
    height: 80,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
  },
});
