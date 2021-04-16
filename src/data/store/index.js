import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import {System} from '_assets/constants';

import rootReducer from './reducers/index';
import {rootSaga} from './sagas/index';

export default class Store {
  initialState = null;

  buildStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const chosenMiddleware = System.ENABLE_REDUX_LOGGING
      ? applyMiddleware(sagaMiddleware, createLogger())
      : applyMiddleware(sagaMiddleware);

    const store = this.initialState
      ? createStore(rootReducer, this.initialState, chosenMiddleware)
      : createStore(rootReducer, chosenMiddleware);

    sagaMiddleware.run(rootSaga);

    return store;
  };
}
