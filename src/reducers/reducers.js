import * as actionTypes from '../actions/actionTypes';

const initialState = {
  userInput: {
    query: '',
    selection: '',
  },
  repositories: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
      };
  }
};

export default reducer;
