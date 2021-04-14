import {all, fork} from 'redux-saga/effects';
import {fetchCategoryList, fetchQuestionList} from './questionSagas';

export function* rootSaga() {
  yield all([fork(fetchCategoryList), fork(fetchQuestionList)]);
}
