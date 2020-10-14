import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
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
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
            {subtitle && (
              <Text style={styles.subtitle} numberOfLines={2}>
                {subtitle}
              </Text>
            )}
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
    display: 'flex',
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    marginBottom: 5,
  },
  subtitle: {
    color: colors.grey,
  },
});
