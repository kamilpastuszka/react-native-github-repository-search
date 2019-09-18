import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {connect} from 'react-redux';
import ListComponent from '../components/ListComponent';
import Spinner from '../components/Spinner';

function ListScreen(props) {
  useEffect(() => {}, [isLoading, repositories]);

  const {isLoading, repositories} = props;

  const listItem = data => {
    const {name, description, stargazers_count, id} = data.item;
    return (
      <ListComponent
        name={name}
        description={description}
        stars={stargazers_count}
        selected={() => {
          props.navigation.navigate({
            routeName: 'Detail',
            params: {
              itemId: id,
            },
          });
        }}
      />
    );
  };

  let List = (
    <FlatList
      keyExtractor={(item, index) => item.id.toString()}
      data={repositories}
      renderItem={listItem}
    />
  );

  if (isLoading && repositories.length <= 0) {
    List = <Spinner />;
  }

  return List;
}

ListScreen.navigationOptions = {
  headerTitle: 'Found Repositories',
};

const mapStateToProps = state => {
  return {
    repositories: state.repositories,
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps)(ListScreen);
