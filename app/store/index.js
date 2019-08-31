import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import reducer from '../reducers/reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);
