import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function UploadIndicator({ percent, visible }) {
  if (!visible) return null;

  return (
    <View style={styles.container}>
      <Text>{percent * 100} %</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});
