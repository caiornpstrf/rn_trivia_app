import {call, put, takeLatest} from 'redux-saga/effects';

import {isLoading, hasError} from '_store/actions/appState';
import {setCategories} from '_store/actions/questions';
import AsyncHandler from '_model/AsyncHandler';

const BASE_URL = 'https://opentdb.com/api.php';
const CATEGORY_URL = 'https://opentdb.com/api_category.php';
const INFO = {
  method: 'GET',
  headers: {
    Accept: '*/*',
    //'Content-Type': 'application/json',
  },
};

export function* fetchCategoryList() {
  yield takeLatest('FETCH_CATEGORY_LIST', callFetchDataForCategoryList);
}

export function* fetchQuestionList() {
  yield takeLatest('FETCH_QUESTION_LIST', callFetchDataForQuestionList);
}

function* callFetchDataForCategoryList(action) {
  const request_info = {
    url: CATEGORY_URL,
    requestInfo: INFO,
    params: null,
  };
  const info = yield callFetchData(request_info);

  if (info && info[0]) {
    yield put(setCategories(true));
  } else {
    yield put(isLoading(false));
  }
}

function* callFetchDataForQuestionList(action) {
  const request_info = {
    url: BASE_URL,
    requestInfo: INFO,
    params: action.category,
  };
  const info = yield callFetchData(request_info);

  if (info && info[0]) {
    yield put(setCategories(true));
  } else {
    yield put(isLoading(false));
  }
}

function* callFetchData(request_info) {
  try {
    yield put(isLoading(true));
    const info = yield call(AsyncHandler.fetchData, request_info);
    return info;
  } catch (error) {
    yield put(hasError({error}));
  }
}
