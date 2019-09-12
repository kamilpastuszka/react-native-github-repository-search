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
      description={selectedRepo.description}
      ownerLogin={selectedRepo.owner.login}
      ownerAvatar={selectedRepo.owner.avatar_url}
      fullName={selectedRepo.full_name}
      stars={selectedRepo.stargazers_count}
      watchers={selectedRepo.watchers}
      forks={selectedRepo.forks}
    />
  );
}

const mapStateToProps = state => {
  return {
    repositories: state.repositories,
  };
};

export default connect(mapStateToProps)(DetailScreen);
