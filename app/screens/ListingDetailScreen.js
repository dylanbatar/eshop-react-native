import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../config/colors';
import ListItemWithIcon from '../components/List/ListItemWithIcon';

export default function ListingDetailScreen({ route }) {
  const { image, title, subtitle } = route.params.item;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.descripcion}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <View style={styles.profile}>
        <ListItemWithIcon
          image={require('../assets/mosh.jpg')}
          title='Dylan Batista'
          subtitle='5 Listings'
          size={60}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 300,
  },
  descripcion: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: colors.white,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  subtitle: {
    color: colors.bluegreen,
    fontSize: 19,
  },
  profile: {},
});
