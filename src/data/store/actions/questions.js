export const setCategories = value => {
  return {
    type: value ? 'CATEGORY_TRUE' : 'CATEGORY_FALSE',
  };
};

export const setQuestionList = value => {
  return {
    type: value ? 'QUESTION_TRUE' : 'QUESTION_FALSE',
  };
};
