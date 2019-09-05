import React from 'react';
import {connect} from 'react-redux';
import {requestApiData, getApiData} from '../actions/actions';

import SearchComponent from '../components/search/index';

function SearchScreen(props) {
  const onPressed = (query, selection) => {
    props.requestData();
    props.getData(query, selection);
  };
  return <SearchComponent pressed={onPressed} />;
}

const mapPropsToDisptch = dispatch => {
  return {
    requestData: () => dispatch(requestApiData()),
    getData: (q, s) => dispatch(getApiData(q, s)),
  };
};

export default connect(
  null,
  mapPropsToDisptch,
)(SearchScreen);
