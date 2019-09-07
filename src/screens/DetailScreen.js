import React from 'react';
import {connect} from 'react-redux';
import DetailComponent from '../components/detail/index';

function DetailScreen(props) {
  const itemId = props.navigation.getParam('itemId');

  const repositories = props.repositories;

  const selectedRepo = repositories.find(repo => repo.id === itemId);

  return (
    <DetailComponent
      name={selectedRepo.name}
      fullName={selectedRepo.full_name}
    />
  );
}

const mapStateToProps = state => {
  return {
    repositories: state.repositories,
  };
};

export default connect(mapStateToProps)(DetailScreen);
