import React from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import ListComponent from '../components/list/index';

function ListScreen(props) {
  const repositories = props.repositories;

  const listItem = data => {
    return (
      <ListComponent
        name={data.item.name}
        description={data.item.description}
        stars={data.item.stargazers_count}
        selected={() => {
          props.navigation.navigate({
            routeName: 'Detail',
            params: {
              itemId: data.item.id,
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
