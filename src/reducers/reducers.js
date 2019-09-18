import * as actionTypes from '../actions/actionTypes';

const initialState = {
  userInput: {
    query: '',
    selection: '',
  },
  repositories: [],
  isLoading: false,
  isApiError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_API_DATA:
      return {
        ...state,
        isLoading: true,
        isApiError: false,
      };

    case actionTypes.GET_API_DATA:
      return {
        ...state,
        userInput: {
          ...state.userInput,
          query: action.query,
          selection: action.selection,
        },
      };

    case actionTypes.SET_API_DATA_LOADING_TRUE:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.SAVE_API_DATA:
      return {
        ...state,
        repositories: action.data.items,
      };

    case actionTypes.SET_API_DATA_LOADING_FALSE:
      return {
        ...state,
        isLoading: false,
      };

    case actionTypes.SET_API_DATA_ERROR:
      return {
        ...state,
        isApiError: true,
      };

    default:
      return state;
  }
};

export default reducer;
