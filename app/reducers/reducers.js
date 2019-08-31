import * as actionTypes from '../actions/actionTypes';

const initialState = {
  userInput: {
    query: '',
    selection: '',
  },
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
  }
};

export default reducer;
