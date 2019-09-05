import {takeEvery, select, take} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import fetch from '../api/fetch';

const getInput = state => state.userInput;

function* getApiData() {
  const action = yield take();
  const {query, selection} = yield select(getInput);
  const data = yield fetch(query, selection);
  console.log(data);
}

export default function* rootSaga() {
  yield takeEvery(actionTypes.REQUEST_API_DATA, getApiData);
}
