import Question from '_model/Question';

export default class Assessment {
  static DIFFICULTY_MAPPING = {
    easy: 0,
    medium: 1,
    hard: 2,
  };

  category = '';
  questionList = [];
  resultList = [];
  currentQuestion = new Question();
  currentDifficulty = 'medium';

  constructor(
    category = '',
    questionList = [],
    resultList = [],
    currentQuestion = new Question(),
    currentDifficulty = 'medium',
  ) {
    this.category = category;
    this.questionList = questionList;
    this.resultList = resultList;
    this.currentQuestion = currentQuestion;
    this.currentDifficulty = currentDifficulty;
  }

  tryToChangeDifficulty(current = '', factor = 0) {
    const nextDifficulty = Assessment.DIFFICULTY_MAPPING[current] + factor;
    if (nextDifficulty === -1 || nextDifficulty === 3) {
      return current;
    }
    return Object.keys(Assessment.DIFFICULTY_MAPPING)[nextDifficulty];
  }

  /**
   * Calculates the next difficulty based on previous perfomance
   * @param {String} currentDifficulty Current question difficulty
   * @param {Array} answeredQuestionList List of past results
   * @param {Boolean} isCorrect Current question result
   * @returns
   */
  getNewDifficulty(isIncomingQuestionCorrect = false) {
    const {resultList, currentDifficulty} = this;
    const completionLength = resultList.length;

    let nextDifficulty = currentDifficulty;
    if (completionLength > 0) {
      if (
        isIncomingQuestionCorrect === resultList[completionLength - 1].isCorrect
      ) {
        nextDifficulty = this.tryToChangeDifficulty(
          currentDifficulty,
          isIncomingQuestionCorrect ? 1 : -1, // Depending on isCorrect send a factor to attempt to get difficulty-1 or +1
        );
      }
    }

    return nextDifficulty;
  }

  countCorrectOccurrences(list = []) {
    const correctCount = list.reduce(
      (accumulator, currentValue) =>
        currentValue.isCorrect ? accumulator + 1 : accumulator,
      0,
    );
    return [correctCount, list.length];
  }

  getListsForEachCategory(list = []) {
    return {
      summary: list,
      easy: list.filter(value => value.difficulty === 'easy'),
      medium: list.filter(value => value.difficulty === 'medium'),
      hard: list.filter(value => value.difficulty === 'hard'),
    };
  }

  getResultsSummary() {
    const {resultList} = this;
    const separatedLists = this.getListsForEachCategory(resultList);
    return {
      summary: this.countCorrectOccurrences(separatedLists.summary),
      easy: this.countCorrectOccurrences(separatedLists.easy),
      medium: this.countCorrectOccurrences(separatedLists.medium),
      hard: this.countCorrectOccurrences(separatedLists.hard),
    };
  }

  sortQuestionListAccordingToDifficulty(nextDifficulty = '') {
    this.questionList.sort((a, b) => (b.difficulty = nextDifficulty));
  }

  prepareNextQuestion(nextDifficulty = '') {
    if (nextDifficulty !== this.currentDifficulty) {
      this.sortQuestionListAccordingToDifficulty(nextDifficulty);
      this.currentDifficulty = nextDifficulty;
    }
    this.currentQuestion = this.questionList[0];
    this.questionList.splice(0, 1);
  }
}
