import React from "react";
import { Keyboard, StyleSheet, View } from "react-native";
import { colors } from "../../config/colors";
import { AppForm, FormField, SubmitButton } from "../Forms";
import messageAPI from "../../api/messages";

export default function ContactSellerForm({ listing }) {
  const handlerSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const response = await messageAPI.send({ listingId: listing.id, message });

    if (!response.ok) {
      alert("error to send message at seller");
      console.log(response.originalError);
      return;
    }

    alert("message send!");

    resetForm();
  };

  return (
    <View style={styles.container}>
      <AppForm initialValues={{ message: "" }} onSubmit={handlerSubmit}>
        <FormField name="message" placeholder="Message..." />
        <SubmitButton title="Contact Seller" color={colors.red} />
      </AppForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});
