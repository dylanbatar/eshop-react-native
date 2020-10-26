import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItemDeleteAct from "../components/List/ListItemDeleteAct";
import ListItemWithIcon from "../components/List/ListItemWithIcon";
import Separator from "../components/List/Separator";

const messageArr = [
  {
    id: 1,
    title: "name user 1",
    subtitle: "Message 1",
  },
  {
    id: 2,
    title: "name user 2",
    subtitle: "Message 2",
  },
  {
    id: 3,
    title: "name user 3",
    subtitle: "Message 3",
  },
];

export default function MessageScreen() {
  const [messages, setMessages] = useState(messageArr);

  const handlerDelete = (idMessage) => {
    setMessages(messages.filter((m) => m.id !== idMessage));
  };

  const pushMessage = () => {
    setMessages([
      ...messages,
      {
        id: 4,
        title: "name user 4",
        subtitle: "Message 4",
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(msg) => msg.id.toString()}
        renderItem={({ item }) => (
          <ListItemWithIcon
            title={item.title}
            subtitle={item.subtitle}
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
