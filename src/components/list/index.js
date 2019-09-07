import React from 'react';
import {View, Text} from 'react-native';

export default function ListComponent({name}) {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
}
