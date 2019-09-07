import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import ListComponent from '../components/list/index';

function ListScreen(props) {
  const repositories = props.repositories;

  const listItem = itemData => {
    return <ListComponent name={itemData.item.name} />;
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id.toString()}
      data={repositories}
      renderItem={listItem}
    />
  );
}

const mapStateToProps = state => {
  console.log('repos2', state);

  return {
    repositories: state.repositories,
  };
};

export default connect(mapStateToProps)(ListScreen);
