import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Content, Card, CardItem, Body} from 'native-base';
import PropTypes from 'prop-types';

export default function ListComponent({name, description, selected, stars}) {
  return (
    <TouchableOpacity onPress={selected}>
      <Content padder>
        <Card>
          <CardItem header>
            <Text>{name}</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{description}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Text>Stars: {stars}</Text>
          </CardItem>
        </Card>
      </Content>
    </TouchableOpacity>
  );
}

ListComponent.propTypes = {
  name: PropTypes.string,
  description: PropTypes.number,
  selected: PropTypes.func,
  stars: PropTypes.number,
};
