import * as actionTypes from '../actions/actionTypes';

const initialState = {
  userInput: {
    query: '',
    selection: '',
  },
  repositories: [],
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_API_DATA:
      return {
        ...state,
        isLoading: true,
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
    case actionTypes.SAVE_API_DATA:
      return {
        ...state,
        repositories: action.data.items,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
