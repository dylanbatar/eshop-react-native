import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItemDeleteAct from "../components/List/ListItemDeleteAct";
import ListItemWithIcon from "../components/List/ListItemWithIcon";
import Separator from "../components/List/Separator";
import { useFetch } from "../hooks/useFetch";
import messageAPI from "../api/messages";
import { useEffect } from "react";

export default function MessageScreen() {
  const messageLayer = useFetch(messageAPI.get);

  const handlerDelete = (idMessage) => {
    setMessages(messages.filter((m) => m.id !== idMessage));
  };

  const pushMessage = () => {
    messageLayer.request();
  };

  useEffect(() => {
    messageLayer.request();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={messageLayer.data}
        keyExtractor={(msg) => msg.id.toString()}
        renderItem={({ item }) => (
          <ListItemWithIcon
            title={item.fromUser.name}
            subtitle={item.content}
            onPress={() => console.log(item.id)}
            image={require("../assets/mosh.jpg")}
            RightAction={() => (
              <ListItemDeleteAct onPress={() => handlerDelete(item.id)} />
            )}
          />
        )}
        ItemSeparatorComponent={Separator}
        refreshing={false}
        onRefresh={() => pushMessage()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
