import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { colors } from '../../config/colors';
import IconComponent from '../IconComponent/IconComponent';

export default function ListItemWithIcon({
  title,
  subtitle,
  icon,
  bgIcon,
  colorIcon,
  image,
  size = 50,
  onPress,
  RightAction,
  trailing,
}) {
  return (
    <Swipeable renderRightActions={RightAction}>
      <TouchableHighlight underlayColor={colors.lightGrey} onPress={onPress}>
        <View style={styles.container}>
          {image && (
            <Image
              source={image}
              style={[
                styles.image,
                { width: size, height: size, borderRadius: size / 2 },
              ]}
            />
          )}
          {icon && (
            <IconComponent
              icon={icon}
              size={size}
              color={colorIcon}
              backgroundColor={bgIcon}
            />
          )}
          <View style={styles.description}>
            <View style={{ justifyContent: 'center' }}>
              <Text style={styles.title} numberOfLines={1}>
                {title}
              </Text>
              {subtitle && (
                <Text style={styles.subtitle} numberOfLines={2}>
                  {subtitle}
                </Text>
              )}
            </View>
            <View>
              <MaterialCommunityIcons name='chevron-right' size={20} />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: colors.white,
  },

  description: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    fontSize: 16,
  },
  subtitle: {
    color: colors.grey,
  },
});
