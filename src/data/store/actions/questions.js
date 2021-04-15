import {ReduxActions} from '_assets/constants';

export const setCategories = value => {
  return {
    type: ReduxActions.SET_CATEGORY_LIST,
    value,
  };
};

export const setQuestionList = value => {
  return {
    type: ReduxActions.SET_QUESTION_LIST,
    value,
  };
};
