import React from 'react';
import { TouchableWithoutFeedback, StyleSheet, Text, View } from 'react-native';
import IconComponent from '../../IconComponent/IconComponent';

export default function PickerItem({
  name,
  icon,
  size = 80,
  backgroundColor,
  onPress,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.wrapper]}>
        <View style={styles.container}>
          <IconComponent
            icon={icon}
            size={size}
            backgroundColor={backgroundColor}
            color='#fff'
          />
        </View>
        <Text numberOfLines={1}>{name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    marginTop: 20,
    marginHorizontal: 10,
  },
});
