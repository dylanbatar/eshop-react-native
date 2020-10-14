import React from 'react';
import { SafeAreaView } from 'react-native';
import Card from '../components/Card/Card';

export default function ListingProductsScreen() {
  return (
    <SafeAreaView>
      <Card
        image={require('../assets/couch.jpg')}
        title='Coach in great condition'
        subtitle='$900'
      />
      <Card
        image={require('../assets/jacket.jpg')}
        title='Red jacket for sale!'
        subtitle='$100'
      />
    </SafeAreaView>
  );
}
