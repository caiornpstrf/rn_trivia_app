import {all, fork} from 'redux-saga/effects';
import {
  fetchCategoryList,
  fetchQuestionList,
  resetQuestionList,
} from './questionSagas';

export function* rootSaga() {
  yield all([
    fork(fetchCategoryList),
    fork(fetchQuestionList),
    fork(resetQuestionList),
  ]);
}
