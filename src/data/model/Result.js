/**
 * @summary
 * @author Caio Reis <caio.oliveira.reis@gmail.com>
 *
 * Created at     : 2021-04-16 03:50:05
 * Last modified  : 2021-04-16 03:50:05
 */

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
