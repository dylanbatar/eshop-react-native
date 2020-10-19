import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import AppScreen from '../components/AppScreen/AppScreen';
import Card from '../components/Card/Card';
import listingAPI from '../api/listings';
import { useFetch } from '../hooks/useFetch';
import RetryConnectButton from '../components/Buttons/RetryConnect/RetryConnect';
import LoadingIndicator from '../components/Indicators/LoadingIndicator';

export default function ListingProductsScreen() {
  const getListing = useFetch(listingAPI.getListing);

  useEffect(() => {
    getListing.request();
  }, []);

  const navigation = useNavigation();
  return (
    <AppScreen>
      <View style={{ flex: 1 }}>
        <LoadingIndicator visible={getListing.loading} />
        {getListing.error ? (
          <RetryConnectButton onPress={getListing.request} />
        ) : (
          <FlatList
            data={getListing.data}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('detailScreen', { item })}
              >
                <Card
                  image={item.images[0].url}
                  title={item.title}
                  subtitle={'$' + item.price}
                />
              </TouchableWithoutFeedback>
            )}
          />
        )}
      </View>
    </AppScreen>
  );
}
