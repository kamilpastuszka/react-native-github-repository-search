import * as actionTypes from './actionTypes';

export const requestApiData = () => ({type: actionTypes.REQUEST_API_DATA});

export const getApiData = apiData => {
  return {
    type: actionTypes.GET_API_DATA,
    apiData,
  };
};
