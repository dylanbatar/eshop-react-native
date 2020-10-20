import React, { useEffect } from "react";
import { FlatList, View, Dimensions } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import AppScreen from "../components/AppScreen/AppScreen";
import Card from "../components/Card/Card";
import listingAPI from "../api/listings";
import { useFetch } from "../hooks/useFetch";
import RetryConnectButton from "../components/Buttons/RetryConnect/RetryConnect";
import LoadingIndicator from "../components/Indicators/LoadingIndicator";
import { useLink } from "../hooks/useLink";
import { colors } from "../config/colors";

export default function ListingProductsScreen() {
  const getListing = useFetch(listingAPI.getListing);
  const [navigatorByRoute] = useLink();

  useEffect(() => {
    getListing.request();
  }, []);

  return (
    <AppScreen>
      <View style={{ flex: 1 }}>
        <LoadingIndicator visible={getListing.loading && !getListing.error} />
        {getListing.error ? (
          <RetryConnectButton onPress={getListing.request} />
        ) : (
          <FlatList
            tintColor={colors.red}
            progressViewOffset={Dimensions.get("screen").height - 250}
            onRefresh={() => getListing.request()}
            refreshing={false}
            data={getListing.data}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback
                onPress={() => navigatorByRoute("detailScreen", { item })}
              >
                <Card
                  image={item.images[0].url}
                  title={item.title}
                  subtitle={"$" + item.price}
                />
              </TouchableWithoutFeedback>
            )}
          />
        )}
      </View>
    </AppScreen>
  );
}
