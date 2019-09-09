import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Bubbles, DoubleBounce, Bars, Pulse} from 'react-native-loader';

export default function Spinner(props) {
  useEffect(() => {
    props.navigation.navigate('List');
  });

  return (
    <View style={styles.spinnerView}>
      <Bubbles size={30} color="#5782af" />
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
