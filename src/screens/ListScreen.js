import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {connect} from 'react-redux';
import {setDataError} from '../actions/actions';
import ListComponent from '../components/ListComponent';
import Spinner from '../components/helpers/Spinner';
import Error from '../components/helpers/Error';

function ListScreen(props) {
  useEffect(() => {}, [isLoading, repositories, isError]);

  const {isLoading, repositories, isError} = props;

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

  if (isLoading && !isError) {
    List = <Spinner />;
    setTimeout(() => {
      if (repositories === undefined) {
        props.setApiError();
      }
    }, 5000);
  }

  if (isError) {
    List = <Error />;
  }

  return List;
}

ListScreen.navigationOptions = {
  headerTitle: 'Found Repositories',
};

const mapPropsToDisptch = dispatch => {
  return {
    setApiError: () => dispatch(setDataError()),
  };
};

const mapStateToProps = state => {
  return {
    repositories: state.repositories,
    isLoading: state.isLoading,
    isError: state.isApiError,
  };
};

export default connect(
  mapStateToProps,
  mapPropsToDisptch,
)(ListScreen);
