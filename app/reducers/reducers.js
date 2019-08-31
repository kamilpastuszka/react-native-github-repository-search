import * as actionTypes from '../actions/actionTypes';

const initialState = {
  query: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_API_DATA:
      return {
        ...state,
        query: state.query.concat(action.apiData),
      };
  }
};

export default reducer;
