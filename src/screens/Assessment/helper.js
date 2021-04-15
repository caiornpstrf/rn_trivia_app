/**
 * Not proud of this file.
 * TODO: Transfer these functions to a future Assessment object (which should be used to control AssessmentScreen)
 */

const DIFFICULTY_MAPPING = {
  easy: 0,
  medium: 1,
  hard: 2,
};

function tryToChangeDifficulty(current = '', factor = 0) {
  const nextDifficulty = DIFFICULTY_MAPPING[current] + factor;
  if (nextDifficulty === -1 || nextDifficulty === 3) {
    return current;
  }
  return Object.keys(DIFFICULTY_MAPPING)[nextDifficulty];
}

function countCorrectOccurrences(list = []) {
  const correctCount = list.reduce(
    (accumulator, currentValue) =>
      currentValue.isCorrect ? accumulator + 1 : accumulator,
    0,
  );
  return [correctCount, list.length];
}

function getListsForEachCategory(list = []) {
  return {
    summary: list,
    easy: list.filter(value => value.question.difficulty === 'easy'),
    medium: list.filter(value => value.question.difficulty === 'medium'),
    hard: list.filter(value => value.question.difficulty === 'hard'),
  };
}

/**
 * Calculates the next difficulty based on previous perfomance
 * @param {String} currentDifficulty Current question difficulty
 * @param {Array} answeredQuestionList List of past results
 * @param {Boolean} isCorrect Current question result
 * @returns
 */
export function getNewDifficulty(
  currentDifficulty = '',
  answeredQuestionList = [],
  isCorrect = false,
) {
  const completionLength = answeredQuestionList.length;
  let nextDifficulty = currentDifficulty;
  if (completionLength > 0) {
    if (isCorrect === answeredQuestionList[completionLength - 1].isCorrect) {
      nextDifficulty = tryToChangeDifficulty(
        currentDifficulty,
        isCorrect ? 1 : -1,
      );
    }
  }
  return nextDifficulty;
}

export function getResultsSummary(answeredQuestionList = []) {
  const separatedLists = getListsForEachCategory(answeredQuestionList);
  return {
    summary: countCorrectOccurrences(separatedLists.summary),
    easy: countCorrectOccurrences(separatedLists.easy),
    medium: countCorrectOccurrences(separatedLists.medium),
    hard: countCorrectOccurrences(separatedLists.hard),
  };
}
