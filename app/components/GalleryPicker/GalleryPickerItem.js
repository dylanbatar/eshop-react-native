import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../config/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function GalleryPickerItem({ image, icon, size = 40, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        {image && (
          <Image source={{ uri: image }} style={{ width: 80, height: 80 }} />
        )}
        {icon && <MaterialCommunityIcons name={icon} size={size} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.lightGrey,
    borderRadius: 12,
    height: 80,
    width: 80,
    justifyContent: 'center',
    marginVertical: 10,
    marginRight: 10,
    overflow: 'hidden',
  },
});
