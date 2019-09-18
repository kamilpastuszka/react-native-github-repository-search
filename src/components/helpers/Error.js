import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Error() {
  return (
    <View style={styles.errorView}>
      <Text style={styles.errorText}>Data could not be loaded</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  errorView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  errorText: {
    color: 'red',
    fontSize: 25,
    textTransform: 'uppercase',
  },
});
