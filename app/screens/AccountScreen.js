import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { colors } from "../config/colors";
import ListItemWithIcon from "../components/List/ListItemWithIcon";
import Separator from "../components/List/Separator";
import { useLink } from "../hooks/useLink";
import { useAuth } from "../hooks/useAuth";

const INITIAL_OPTIONS = [
  {
    title: "My listing",
    icon: {
      bg: colors.red,
      name: "format-list-bulleted",
    },
    route: "myListings",
  },
  {
    title: "My Messages",
    icon: {
      bg: colors.bluegreen,
      name: "email",
    },
    route: "message",
  },
];

export default function AccountScreen() {
  const [navigateToRoute] = useLink();
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.profileItem}>
        <ListItemWithIcon
          title={user.name}
          subtitle={user.email}
          size={60}
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <FlatList
        data={INITIAL_OPTIONS}
        keyExtractor={(item) => item.title}
        ItemSeparatorComponent={Separator}
        renderItem={({ item }) => (
          <ListItemWithIcon
            size={40}
            title={item.title}
            icon={item.icon.name}
            bgIcon={item.icon.bg}
            onPress={() => navigateToRoute(item.route)}
          />
        )}
        ListFooterComponent={<Separator style={{ paddingTop: 20 }} />}
      />
      <ListItemWithIcon
        title="Log Out"
        bgIcon="#ffe66d"
        icon="logout"
        size={40}
        onPress={logout}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  profileItem: {
    marginVertical: 20,
  },
});
