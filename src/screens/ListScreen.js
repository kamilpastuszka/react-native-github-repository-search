import React from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import ListComponent from '../components/list/index';
import {View, Text} from 'react-native';

function ListScreen(props) {
  const repositories = props.repositories;

  const listItem = data => {
    return (
      <ListComponent
        name={data.item.name}
        description={data.item.description}
        stars={data.item.stargazers_count}
        avatar={data.item.avatar_url}
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

  if (props.isLoading) {
    return (
      <View>
        <Text>errr</Text>
      </View>
    );
  }
  if (!props.isLoading) {
    return (
      <FlatList
        keyExtractor={(item, index) => item.id.toString()}
        data={repositories}
        renderItem={listItem}
      />
    );
  }
}

//  return ListComponent;

// <FlatList
//   keyExtractor={(item, index) => item.id.toString()}
//   data={repositories}
//   renderItem={listItem}
// />
//

const mapStateToProps = state => {
  return {
    repositories: state.repositories,
    isLoading: state.isL,
  };
};

export default connect(mapStateToProps)(ListScreen);
