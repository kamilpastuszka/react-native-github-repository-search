import {takeLatest, select, take, put} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import {saveApiData} from '../actions/actions';
import fetch from '../api/fetch';

const getInput = state => state.userInput;

function* getApiData() {
  try {
    const action = yield take();
    const {query, selection} = yield select(getInput);
    const data = yield fetch(query, selection);
    yield put(saveApiData(data));
    console.log('api data', data);
  } catch (e) {}
}

export default function* rootSaga() {
  yield takeLatest(actionTypes.REQUEST_API_DATA, getApiData);
}
