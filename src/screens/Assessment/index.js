/**
 * @summary Assessment screen
 * @author Caio Reis <caio.oliveira.reis@gmail.com>
 *
 * Created at     : 2021-04-14 03:43:37
 * Last modified  : 2021-04-15 09:07:04
 */

/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {Spinner} from 'components/atoms';
import {AssessmentTemplate} from '_components/templates';
import {AssessmentStrings, ReduxActions} from '_assets/constants';

import Question from '_model/Question';

const MAX_NUMBER_OF_QUESTIONS = 10;
const DIFFICULTY_MAPPING = {
  easy: 0,
  medium: 1,
  hard: 2,
};

const tryToChangeDifficulty = (current = '', factor = 0) => {
  const nextDifficulty = DIFFICULTY_MAPPING[current] + factor;
  if (nextDifficulty === -1 || nextDifficulty === 3) {
    return current;
  }
  return Object.keys(DIFFICULTY_MAPPING)[nextDifficulty];
};

/**
 * Calculates the next difficulty based on previous perfomance
 * @param {String} currentDifficulty Current question difficulty
 * @param {Array} answeredQuestionList List of past results
 * @param {Boolean} isCorrect Current question result
 * @returns
 */
const getNewDifficulty = (
  currentDifficulty = '',
  answeredQuestionList = [],
  isCorrect = false,
) => {
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
};

const Assessment = ({route, navigation}) => {
  // Redux
  const questionList = useSelector(state => state.questions.questionList);
  const dispatch = useDispatch();
  // States
  const [currentQuestion, setCurrentQuestion] = useState(new Question());
  const [showButton, setShowButton] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [localQuestionList, setLocalQuestionList] = useState([]);
  const [answeredQuestionList, setAnsweredQuestionList] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [currentDifficulty, setCurrentDifficulty] = useState('medium');
  // Navigation
  const {category = ''} = route.params || {};
  // General
  const isInvalidList = questionList.length === 0;
  const isInvalidQuestion = currentQuestion.question === '';

  // Execute once
  useEffect(() => {
    if (isInvalidList) {
      dispatch({type: ReduxActions.FETCH_QUESTION_LIST, category});
    }
  }, []);

  // Exec when questionList updates
  useEffect(() => {
    if (!isInvalidList && isInvalidQuestion) {
      let newQuestionList = questionList;
      setCurrentQuestion(questionList[0]);
      newQuestionList.splice(0, 1);
      setLocalQuestionList(newQuestionList);
    }
  }, [questionList]);

  // Procedure executed to bring the next question
  const bringNextQuestion = () => {
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    let newAnsweredQuestionList = answeredQuestionList;
    let nextDifficulty = getNewDifficulty(
      currentDifficulty,
      answeredQuestionList,
      isCorrect,
    );

    let newQuestionList = localQuestionList.sort(
      (a, b) => (b.difficulty = nextDifficulty),
    );
    newAnsweredQuestionList.push({
      question: currentQuestion,
      date: new Date(),
      isCorrect,
    });

    setCurrentQuestion(newQuestionList[0]);
    newQuestionList.splice(0, 1);
    setAnsweredQuestionList(newAnsweredQuestionList);
    setLocalQuestionList(newQuestionList);
    setSelectedAnswer('');
    setShowButton(false);
    setQuestionNumber(questionNumber + 1);
    setCurrentDifficulty(nextDifficulty);

    console.log(isCorrect, 'next: ' + nextDifficulty);
  };

  const concludeAssessment = () => {
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    let newAnsweredQuestionList = answeredQuestionList;
    newAnsweredQuestionList.push({
      question: currentQuestion,
      date: new Date(),
      isCorrect,
    });

    console.warn('YOU DID IT!');
  };

  // Destructure strings
  const {
    correctAnswer,
    incorrectAnswer,
    nextQuestionBtn,
    finishBtn,
    questionLabel,
  } = AssessmentStrings;

  if (isInvalidList || isInvalidQuestion) {
    return <Spinner />;
  }
  return (
    <AssessmentTemplate
      title={questionLabel.replace('{0}', questionNumber)}
      question={currentQuestion.question}
      answers={currentQuestion.answers}
      difficulty={currentQuestion.difficulty}
      onItemSelected={({item, index}) => {
        setSelectedAnswer(item);
        setShowButton(true);
      }}
      displayNextButton={showButton}
      nextButtonLabel={
        questionNumber !== MAX_NUMBER_OF_QUESTIONS ? nextQuestionBtn : finishBtn
      }
      onPressNextButton={
        questionNumber !== MAX_NUMBER_OF_QUESTIONS
          ? bringNextQuestion
          : concludeAssessment
      }
      modalVisible={true}
      onRequestClose={() => {}}
      correctLabel={correctAnswer}
      incorrectLabel={incorrectAnswer}
      isCorrect={true}
    />
  );
};

export default Assessment;
