const initialState = {
  categories: [],
  questionList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'QUESTION_TRUE': {
      return {
        ...state,
      };
    }
    case 'QUESTION_FALSE': {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};
