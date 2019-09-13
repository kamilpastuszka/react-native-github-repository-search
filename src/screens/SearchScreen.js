import React from 'react';
import {connect} from 'react-redux';
import {requestApiData, getApiData} from '../actions/actions';
import PropTypes from 'prop-types';

import SearchComponent from '../components/SearchComponent';

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

SearchScreen.navigationOptions = {
  headerTitle: 'Search Repositories',
  headerTitleStyle: {
    textAlign: 'center',
    flex: 1,
  },
};

const mapPropsToDisptch = dispatch => {
  return {
    requestData: () => dispatch(requestApiData()),
    getData: (q, s) => dispatch(getApiData(q, s)),
  };
};

SearchScreen.propTypes = {
  repositories: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
};

export default connect(
  mapStateToProps,
  mapPropsToDisptch,
)(SearchScreen);
