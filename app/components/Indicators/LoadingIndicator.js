import React from "react";
import LottieView from "lottie-react-native";
import { ActivityIndicator, Platform, Text, View } from "react-native";
import { colors } from "../../config/colors";

export default class LoadingIndicator extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    if (!this.props.visible) return null;
    return (
      <>
        {Platform.OS === "ios" ? (
          <LottieView
            source={require("../../assets/animations/loader.json")}
            autoPlay
            loop
          />
        ) : (
          <View style={{ flex: 1, justifyContent: "center" }}>
            <ActivityIndicator animating={true} size={60} color={colors.red} />
          </View>
        )}
      </>
    );
  }
}
