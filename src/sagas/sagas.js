import {takeLatest, select, put} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import {saveApiData, setDataError} from '../actions/actions';
import fetch from '../api/fetch';

const getInput = state => state.userInput;

const getRepositories = state => state.repositories;

function* getApiData() {
  try {
    const {query, selection} = yield select(getInput);
    const data = yield fetch(query, selection);
    yield put({type: actionTypes.SET_API_DATA_LOADING_TRUE});
    yield put(saveApiData(data));
    const repositories = yield select(getRepositories);
    if (repositories) {
      yield put({type: actionTypes.SET_API_DATA_LOADING_FALSE});
    }
  } catch (e) {
    yield put({type: actionTypes.SET_API_DATA_LOADING_FALSE});
    yield put(setDataError());
  }
}

export default function* rootSaga() {
  yield takeLatest(actionTypes.REQUEST_API_DATA, getApiData);
}
