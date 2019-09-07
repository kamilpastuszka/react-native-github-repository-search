import React from 'react';
import {View, Text} from 'react-native';

export default function DetailComponent({name, fullName}) {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{fullName}</Text>
    </View>
  );
}
