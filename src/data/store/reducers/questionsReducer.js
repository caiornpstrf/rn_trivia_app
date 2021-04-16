/**
 * @summary
 * @author Caio Reis <caio.oliveira.reis@gmail.com>
 *
 * Created at     : 2021-04-16 03:51:39
 * Last modified  : 2021-04-16 03:51:39
 */

import {ReduxActions} from '_assets/constants';

const initialState = {
  categoryList: [],
  questionList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ReduxActions.SET_CATEGORY_LIST: {
      return {
        ...state,
        categoryList: action.value,
      };
    }
    case ReduxActions.SET_QUESTION_LIST: {
      return {
        ...state,
        questionList: action.value,
      };
    }
    default: {
      return state;
    }
  }
};
