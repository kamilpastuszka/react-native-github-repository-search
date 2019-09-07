import React from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import ListComponent from '../components/list/index';

function ListScreen(props) {
  const repositories = props.repositories;

  const listItem = itemData => {
    return (
      <ListComponent
        name={itemData.item.name}
        selected={() => {
          props.navigation.navigate({
            routeName: 'Detail',
            params: {
              itemId: itemData.item.id,
            },
          });
        }}
      />
    );
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
  return {
    repositories: state.repositories,
  };
};

export default connect(mapStateToProps)(ListScreen);
