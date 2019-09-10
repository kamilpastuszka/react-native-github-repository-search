import React from 'react';
import {connect} from 'react-redux';
import {requestApiData, getApiData} from '../actions/actions';

import SearchComponent from '../components/search/index';

function SearchScreen(props) {
  const onPressed = (query, selection) => {
    props.requestData();
    props.getData(query, selection);
    props.navigation.navigate('List');
  };

  return <SearchComponent pressed={onPressed} />;
}

const mapStateToProps = (state, props) => {
  return {
    repos: state.repositories,
    isLoading: state.isLoading,
  };
};

const mapPropsToDisptch = dispatch => {
  return {
    requestData: () => dispatch(requestApiData()),
    getData: (q, s) => dispatch(getApiData(q, s)),
  };
};

export default connect(
  mapStateToProps,
  mapPropsToDisptch,
)(SearchScreen);
