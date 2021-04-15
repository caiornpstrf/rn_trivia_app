import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import {System} from '_assets/constants';

import rootReducer from './reducers/index';
import {rootSaga} from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

const chosenMiddleware = System.ENABLE_REDUX_LOGGING
  ? applyMiddleware(sagaMiddleware, createLogger())
  : applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, chosenMiddleware);

sagaMiddleware.run(rootSaga);

export {store};
