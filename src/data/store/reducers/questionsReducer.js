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
