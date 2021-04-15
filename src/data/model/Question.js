export default class Question {
  category = '';
  type = '';
  difficulty = '';
  question = '';
  correctAnswer = '';
  answers = [];

  constructor(
    category = '',
    type = '',
    difficulty = 'easy',
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

  decode = (encodedValue = '') => {
    return decodeURIComponent(encodedValue);
  };

  parseRequestObjectToQuestion = (generic = {}) => {
    const {
      category = '',
      type = '',
      difficulty = '',
      question = '',
      correct_answer = '',
      incorrect_answers = [],
    } = generic;
    const decodedCorrect = this.decode(correct_answer);
    let answers = incorrect_answers.map(a => this.decode(a));
    answers.push(decodedCorrect);

    this.category = this.decode(category);
    this.type = this.decode(type);
    this.difficulty = this.decode(difficulty);
    this.question = this.decode(question);
    this.correctAnswer = decodedCorrect;
    this.answers = answers.sort(() => Math.random() - 0.5);
    return this;
  };
}
