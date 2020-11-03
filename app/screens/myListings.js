import React from "react";
import { useEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  useWindowDimensions,
} from "react-native";
import listingsAPI from "../api/listings";
import { useFetch } from "../hooks/useFetch";

export default function myListings() {
  const listingsLayer = useFetch(listingsAPI.getMyListings);
  const window = useWindowDimensions();

  const loadListings = async () => {
    const response = await listingsLayer.request();
    return response;
  };

  useEffect(() => {
    console.log(window);
    loadListings();
  }, []);

  return (
    <View style={styles.grid}>
      <FlatList
        contentContainerStyle={styles.grid}
        data={listingsLayer.data}
        style={{ flexWrap: "wrap" }}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item }) => (
          <View style={[styles.gridItem, { width: window.width / 4 }]}>
            <Image
              source={{
                uri: item.images[0].url,
                width: "100%",
                height: 150,
              }}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  grid: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },

  gridItem: {
    height: 120,
  },
});
