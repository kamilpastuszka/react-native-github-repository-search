import React from 'react';
import {connect} from 'react-redux';
import {requestApiData, getApiData} from '../actions/actions';

import SearchComponent from '../components/SearchComponent';

function SearchScreen(props) {
  const onPressed = input => {
    props.requestData();
    props.getData(input);
  };
  return <SearchComponent pressed={onPressed} />;
}

const mapPropsToDisptch = dispatch => {
  return {
    requestData: () => dispatch(requestApiData()),
    getData: apiData => dispatch(getApiData(apiData)),
  };
};

export default connect(
  null,
  mapPropsToDisptch,
)(SearchScreen);
