export const setCategories = value => {
  return {
    type: 'SET_CATEGORY_LIST',
    value,
  };
};

export const setQuestionList = value => {
  return {
    type: 'SET_QUESTION_LIST',
    value,
  };
};
