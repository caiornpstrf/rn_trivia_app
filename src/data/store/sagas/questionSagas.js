/**
 * @summary Handles every saga dispatch for questions state
 * @author Caio Reis <caio.oliveira.reis@gmail.com>
 *
 * Created at     : 2021-04-16 03:51:54
 * Last modified  : 2021-04-16 03:52:30
 */

import {call, put, takeLatest} from 'redux-saga/effects';

import {isLoading, hasError} from '_store/actions/appState';
import {setCategories, setQuestionList} from '_store/actions/questions';
import {ReduxActions, System} from '_assets/constants';

import AsyncHandler from '_model/AsyncHandler';
import Question from '_model/Question';
import Category from '_model/Category';

const {BASE_URL, CATEGORY_URL} = System;
const {
  FETCH_CATEGORY_LIST,
  FETCH_QUESTION_LIST,
  RESET_QUESTION_LIST,
} = ReduxActions;

const INFO = {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
};

export function* fetchCategoryList() {
  yield takeLatest(FETCH_CATEGORY_LIST, callFetchDataForCategoryList);
}

export function* fetchQuestionList() {
  yield takeLatest(FETCH_QUESTION_LIST, callFetchDataForQuestionList);
}

export function* resetQuestionList() {
  yield takeLatest(RESET_QUESTION_LIST, callResetQuestionList);
}

function* callFetchDataForCategoryList(action) {
  const request_info = {
    url: CATEGORY_URL,
    requestInfo: INFO,
    params: null,
  };

  const info = yield callFetchData(request_info);
  if (info && info.trivia_categories) {
    let categoryList = [];
    info.trivia_categories.map(category =>
      categoryList.push(new Category(category.id, category.name)),
    );

    yield put(setCategories(categoryList));
  }
}

function parseRequestListToQuestionList(list = []) {
  return list.map(generic => {
    let question = new Question();
    question.parseRequestObjectToQuestion(generic);
    return question;
  });
}

function getNeededRequestInfoForQuestion(
  category = 0,
  difficulty = '',
  amount = 0,
  type = '',
) {
  const baseRequestInfo = {url: BASE_URL, requestInfo: INFO};
  const params = {encode: 'url3986', category, difficulty, amount, type};
  return {
    ...baseRequestInfo,
    params,
  };
}

function* callFetchDataForQuestionList(action) {
  const difficulties = ['easy', 'medium', 'hard'];
  const firstRequestInfo = getNeededRequestInfoForQuestion(
    action.category.id,
    'medium',
    2,
    'multiple',
  );

  let otherRequestInfo = getNeededRequestInfoForQuestion(
    action.category.id,
    null,
    8,
    null,
  );

  let questionList = [];

  // Get first two questions
  const firstInfo = yield callFetchData(firstRequestInfo);
  if (firstInfo && firstInfo.results) {
    questionList = questionList.concat(firstInfo.results);
  }

  for (const difficulty of difficulties) {
    otherRequestInfo.params.difficulty = difficulty;
    const info = yield callFetchData(otherRequestInfo);
    if (info && info.results) {
      questionList = questionList.concat(info.results);
    }
  }

  questionList = parseRequestListToQuestionList(questionList);
  yield put(setQuestionList(questionList));
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

function* callResetQuestionList(action) {
  yield put(setQuestionList([]));
}
