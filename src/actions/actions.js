import * as actionTypes from './actionTypes';

export const requestApiData = () => ({type: actionTypes.REQUEST_API_DATA});

export const getApiData = (query, selection) => {
  return {
    type: actionTypes.GET_API_DATA,
    query,
    selection,
  };
};

export const saveApiData = data => {
  return {
    type: actionTypes.SAVE_API_DATA,
    data,
  };
};

export const setDataError = () => {
  return {
    type: actionTypes.SET_API_DATA_ERROR,
  };
};
