/**
 * @summary Actions specific for questions state
 * @author Caio Reis <caio.oliveira.reis@gmail.com>
 *
 * Created at     : 2021-04-16 03:50:53
 * Last modified  : 2021-04-16 03:50:53
 */

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
