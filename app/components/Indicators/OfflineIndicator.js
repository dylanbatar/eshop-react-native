import React, { useEffect, useState } from 'react';
import { useNetInfo } from '@react-native-community/netinfo';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../config/colors';

export default function OfflineIndicator() {
  const netInfo = useNetInfo();
  const [connect, setConnect] = useState({
    first: null,
    duration: 4000,
  });

  const handlerNetworkMessage = () => {
    if (
      netInfo.isInternetReachable === false &&
      netInfo.type != 'wifi' &&
      netInfo.details !== null
    ) {
      setConnect({ ...connect, first: false });
    } else {
      if (connect.first === false) {
        setConnect({ ...connect, first: true });
        setTimeout(() => {
          setConnect({ ...connect, first: null });
        }, connect.duration);
      }
    }
  };

  useEffect(() => {
    handlerNetworkMessage();
  }, [netInfo.type, netInfo.isInternetReachable]);

  return (
    <>
      {netInfo.isInternetReachable === false && netInfo.type != 'wifi' ? (
        <OfflineView />
      ) : (
        <OnlineView visible={connect.first} />
      )}
    </>
  );
}

const OfflineView = () => (
  <View style={[styles.container, { backgroundColor: colors.dark }]}>
    <Text style={styles.text}>No Connection</Text>
  </View>
);

const OnlineView = ({ visible }) => {
  if (visible === null) return null;

  return (
    <>
      <View style={[styles.container, { backgroundColor: colors.bluegreen }]}>
        <Text style={styles.text}>Back Online</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: colors.white,
  },
});
