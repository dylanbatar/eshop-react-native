import React from 'react';
import LottieView from 'lottie-react-native';
import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { colors } from '../../config/colors';

export default class LoadingIndicator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.visible) return null;
    return (
      <>
        <View style={styles.overlay}>
          {Platform.OS === 'ios' ? (
            <LottieView
              source={require('../../assets/animations/loader.json')}
              autoPlay
              loop
            />
          ) : (
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <ActivityIndicator
                animating={true}
                size={60}
                color={colors.red}
              />
            </View>
          )}
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: 10,
    backgroundColor: colors.white,
    opacity: 0.8,
  },
});
