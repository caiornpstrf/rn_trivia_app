import {call, put, takeLatest, take} from 'redux-saga/effects';

import {isLoading, hasError} from 'data/store/actions/appState';
import {setCategories, setQuestionList} from 'data/store/actions/questions';

import AsyncHandler from '_model/AsyncHandler';
import Question from '_model/Question';
import Category from '_model/Category';

const BASE_URL = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=hard';
const CATEGORY_URL = 'https://opentdb.com/api_category.php';
const INFO = {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
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
  if (info && info.trivia_categories) {
    let categoryList = [];
    info.trivia_categories.map(category =>
      categoryList.push(new Category(category.id, category.name)),
    );

    yield put(setCategories(categoryList));
  }
}

function parseRequestListToQuestionList(list = []) {
  let questionList = [];
  list.forEach(generic => {
    let question = new Question();
    question.parseRequestObjectToQuestion(generic);
    questionList.push(question);
  });

  return questionList;
}

function* callFetchDataForQuestionList(action) {
  const difficulties = ['easy', 'medium', 'hard'];
  const request_info = {
    url: BASE_URL,
    requestInfo: INFO,
    params: {
      amount: 10,
      category: action.category.id,
      encode: 'url3986',
    },
  };

  let questionList = [];
  for (const difficulty of difficulties) {
    request_info.params.difficulty = difficulty;
    const info = yield callFetchData(request_info);
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
