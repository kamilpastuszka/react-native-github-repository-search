import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Bubbles} from 'react-native-loader';

export default function Spinner(props) {
  return (
    <View style={styles.spinnerView}>
      <Bubbles size={30} color="#a5a2a4" />
    </View>
  );
}

const styles = StyleSheet.create({
  spinnerView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
