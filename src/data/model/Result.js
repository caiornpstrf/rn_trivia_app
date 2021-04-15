export default class Result {
  givenAnswer = '';
  correctAnswer = '';
  difficulty = '';
  answerDate = new Date();
  isCorrect = false;

  constructor(
    givenAnswer = '',
    correctAnswer = '',
    difficulty = '',
    answerDate = new Date(),
  ) {
    this.givenAnswer = givenAnswer;
    this.correctAnswer = correctAnswer;
    this.difficulty = difficulty;
    this.answerDate = answerDate;
    this.isCorrect =
      givenAnswer && correctAnswer && givenAnswer === correctAnswer;
  }
}
