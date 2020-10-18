import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import AppScreen from '../components/AppScreen/AppScreen';
import Card from '../components/Card/Card';

const DATA = [
  {
    image: require('../assets/couch.jpg'),
    title: 'Coach in great condition',
    subtitle: '$900',
  },
  {
    image: require('../assets/jacket.jpg'),
    title: 'Red jacket for sale!',
    subtitle: '$100',
  },
  {
    image: require('../assets/jacket.jpg'),
    title: 'Red jacket for sale!',
    subtitle: '$100',
  },
];

export default function ListingProductsScreen() {
  const navigation = useNavigation();
  return (
    <AppScreen>
      <View style={{ flex: 1 }}>
        <FlatList
          data={DATA}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('detailScreen', { item })}
            >
              <Card
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
              />
            </TouchableWithoutFeedback>
          )}
        />
      </View>
    </AppScreen>
  );
}
