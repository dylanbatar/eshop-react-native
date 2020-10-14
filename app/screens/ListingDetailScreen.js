import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ListItemWithIcon from '../components/List/ListItemWithIcon';
import { colors } from '../config/colors';

export default function ListingDetailScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/jacket.jpg')} />
      <View style={styles.descripcion}>
        <Text style={styles.title}>Red Jacket for sale!</Text>
        <Text style={styles.subtitle}>$ 100</Text>
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
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  subtitle: {
    color: colors.bluegreen,
    fontSize: 19,
  },
  profile: {
    marginHorizontal: 10,
  },
});
