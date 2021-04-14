const initialState = {
  categoryList: [],
  questionList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CATEGORY_LIST': {
      return {
        ...state,
        categoryList: action.value,
      };
    }
    case 'SET_QUESTION_LIST': {
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
