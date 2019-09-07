import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function ListComponent({name, selected}) {
  return (
    <TouchableOpacity onPress={selected}>
      <View>
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}
