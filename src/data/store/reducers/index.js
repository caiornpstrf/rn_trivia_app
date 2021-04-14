import {combineReducers} from 'redux';

import questionsReducer from './questionsReducer';
import appStateReducer from './appStateReducer';

const rootReducer = combineReducers({
  questions: questionsReducer,
  appState: appStateReducer,
});

export default rootReducer;
