import {takeEvery, select, take} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import fetch from '../api/fetch';

const getQuery = state => state.query;

function* getApiData() {
  const action = yield take();
  const query = yield select(getQuery);
  const data = yield fetch(query);
  console.log('state', query);
  console.log(data);
}

export default function* rootSaga() {
  yield takeEvery(actionTypes.REQUEST_API_DATA, getApiData);
}
