import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Image } from "react-native-expo-image-cache";
import { colors } from "../config/colors";
import ListItemWithIcon from "../components/List/ListItemWithIcon";
import { useAuth } from "../hooks/useAuth";
import ContactSellerForm from "../components/ContactSellerForm/ContactSellerForm";

export default function ListingDetailScreen({ route }) {
  const { item } = route.params;
  const { user } = useAuth();

  return (
    // <View style={styles.container}>
    <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={80}>
      <Image style={styles.image} uri={item.images[0].url} />
      <View style={styles.descripcion}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{"$" + item.price}</Text>
      </View>
      <View style={styles.profile}>
        <ListItemWithIcon
          image={require("../assets/mosh.jpg")}
          title={user.name}
          subtitle="5 Listings"
          size={60}
        />
        <ContactSellerForm listing={item} />
      </View>
    </KeyboardAvoidingView>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
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
});
