import Category from './Category';

export default class Question {
  category = new Category();
  type = '';
  difficulty = '';
  question = '';
  correctAnswer = '';
  answers = [];

  constructor(
    category = new Category(),
    type = '',
    difficulty = '',
    question = '',
    correctAnswer = '',
    answers = [],
  ) {
    this.category = category;
    this.type = type;
    this.difficulty = difficulty;
    this.question = question;
    this.correctAnswer = correctAnswer;
    this.answers = answers;
  }
}
