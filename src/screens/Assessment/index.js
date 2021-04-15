/**
 * @summary Assessment screen
 * @author Caio Reis <caio.oliveira.reis@gmail.com>
 *
 * Created at     : 2021-04-14 03:43:37
 * Last modified  : 2021-04-15 14:17:35
 */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {Spinner} from 'components/atoms';
import {
  AssessmentTemplate,
  AssessmentResultTemplate,
} from '_components/templates';
import {AssessmentStrings, ReduxActions, System} from '_assets/constants';

import {AssessmentPersistence} from '_model/Assessment';
import Question from '_model/Question';

import {getNewDifficulty, getResultsSummary} from './helper';

const Assessment = ({route, navigation}) => {
  // Redux
  const questionList = useSelector(state => state.questions.questionList);
  const dispatch = useDispatch();
  // States
  const [currentQuestion, setCurrentQuestion] = useState(new Question());
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [questionNumber, setQuestionNumber] = useState(1);
  const [currentDifficulty, setCurrentDifficulty] = useState('medium');

  const [showButton, setShowButton] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const [modalData, setModalData] = useState({
    modalVisible: false,
    isCorrect: false,
  });
  const [resultsData, setResultsData] = useState({
    summary: [0, 0],
    easy: [0, 0],
    medium: [0, 0],
    hard: [0, 0],
  });

  const [localQuestionList, setLocalQuestionList] = useState([]);
  const [answeredQuestionList, setAnsweredQuestionList] = useState([]);
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
    setModalData({modalVisible: true, isCorrect});
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

    const results = getResultsSummary(newAnsweredQuestionList);
    setResultsData(results);
    setShowResults(true);
  };

  const saveAndGoBack = () => {
    AssessmentPersistence.storeData(resultsData, category);
    navigation.goBack();
  };

  // Destructure strings
  const {
    correctAnswer,
    incorrectAnswer,
    nextQuestionBtn,
    finishBtn,
    questionLabel,
    goBackBtn,
  } = AssessmentStrings;

  if (isInvalidList || isInvalidQuestion) {
    return <Spinner />;
  }
  if (!showResults) {
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
          questionNumber !== System.MAX_NUMBER_OF_QUESTIONS
            ? nextQuestionBtn
            : finishBtn
        }
        onPressNextButton={
          questionNumber !== System.MAX_NUMBER_OF_QUESTIONS
            ? bringNextQuestion
            : concludeAssessment
        }
        modalVisible={modalData.modalVisible}
        onRequestClose={() =>
          setModalData({modalVisible: false, isCorrect: false})
        }
        correctLabel={correctAnswer}
        incorrectLabel={incorrectAnswer}
        isCorrect={modalData.isCorrect}
      />
    );
  } else {
    return (
      <AssessmentResultTemplate
        onPress={saveAndGoBack}
        buttonLabel={goBackBtn}
        resultsMapping={resultsData}
      />
    );
  }
};

export default Assessment;
