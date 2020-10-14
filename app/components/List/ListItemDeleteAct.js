import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../config/colors';

export default function ListItemDeleteAct({ style, onPress }) {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={[styles.container, style]}>
        <MaterialCommunityIcons
          name='trash-can'
          size={30}
          color={colors.white}
        />
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
