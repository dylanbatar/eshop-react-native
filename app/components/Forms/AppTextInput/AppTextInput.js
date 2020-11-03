import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../../../config/colors";

export default function AppTextInput({ icon, width = "100%", ...props }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons name={icon} size={22} color={colors.grey} />
      )}
      <TextInput style={styles.input} {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.lightGrey,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    shadowColor: colors.fullDark,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
  },
  input: {
    fontSize: 20,
    paddingLeft: 10,
    color: colors.dark,
    overflow: "hidden",
    width: "90%",
  },
});
