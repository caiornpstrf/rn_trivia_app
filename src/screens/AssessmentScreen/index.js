/* eslint-disable react-hooks/exhaustive-deps */
/**
 * @summary Assessment screen
 * @author Caio Reis <caio.oliveira.reis@gmail.com>
 *
 * Created at     : 2021-04-14 03:43:37
 * Last modified  : 2021-04-16 03:53:18
 */

import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {Spinner} from 'components/atoms';
import {
  AssessmentTemplate,
  AssessmentResultTemplate,
} from '_components/templates';
import {AssessmentStrings, ReduxActions, System} from '_assets/constants';

import Assessment, {AssessmentPersistence} from '_model/Assessment';
import Result from '_model/Result';

const defaultResultData = {
  summary: [0, 0],
  easy: [0, 0],
  medium: [0, 0],
  hard: [0, 0],
};

const AssessmentScreen = ({route, navigation}) => {
  // Redux
  const questionList = useSelector(state => state.questions.questionList);
  const dispatch = useDispatch();
  // Navigation
  const {category = '', savedResults = null} = route.params || {};
  // General
  const isInvalidList = questionList.length === 0;
  // States
  const [assessment, setAssessment] = useState(new Assessment());

  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [questionNumber, setQuestionNumber] = useState(1);
  const [isDoneLoading, setDoneLoading] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showResults, setShowResults] = useState(savedResults ? true : false);

  const [modalData, setModalData] = useState({
    modalVisible: false,
    isCorrect: false,
  });
  const [resultsData, setResultsData] = useState(
    savedResults ? savedResults.summary : defaultResultData,
  );

  // Execute once
  useEffect(() => {
    if (isInvalidList) {
      dispatch({type: ReduxActions.FETCH_QUESTION_LIST, category});
    }
  }, []);

  // Exec when questionList updates
  useEffect(() => {
    if (!isInvalidList && !isDoneLoading) {
      let nextAssessment = assessment;
      nextAssessment.currentQuestion = questionList[0];
      nextAssessment.questionList = questionList;
      nextAssessment.questionList.splice(0, 1);
      setAssessment(nextAssessment);
      setDoneLoading(true);
    }
  }, [questionList]);

  const displayCurrentResult = () => {
    const result = new Result(
      selectedAnswer,
      assessment.currentQuestion.correctAnswer,
      assessment.currentDifficulty,
    );
    setModalData({modalVisible: true, isCorrect: result.isCorrect});
  };

  // Procedure executed to bring the next question
  const bringNextQuestion = () => {
    let nextAssessment = assessment;
    const result = new Result(
      selectedAnswer,
      assessment.currentQuestion.correctAnswer,
      assessment.currentDifficulty,
    );

    let nextDifficulty = nextAssessment.getNewDifficulty(result.isCorrect);

    nextAssessment.resultList.push(result);
    nextAssessment.prepareNextQuestion(nextDifficulty);

    setModalData({modalVisible: false, isCorrect: false});
    setSelectedAnswer('');
    setShowButton(false);
    setQuestionNumber(questionNumber + 1);
    setAssessment(nextAssessment);
  };

  const concludeAssessment = () => {
    let nextAssessment = assessment;
    const result = new Result(
      selectedAnswer,
      assessment.currentQuestion.correctAnswer,
      assessment.currentDifficulty,
    );

    nextAssessment.resultList.push(result);
    const results = nextAssessment.getResultsSummary();

    setModalData({modalVisible: false, isCorrect: false});
    setResultsData(results);
    setShowResults(true);
    setAssessment(nextAssessment);
  };

  const saveAndGoBack = () => {
    if (!savedResults) {
      AssessmentPersistence.storeData(category.id, {
        summary: resultsData,
        resultList: assessment.resultList,
      });
    }
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

  if (!isDoneLoading) {
    return <Spinner />;
  } else if (!showResults) {
    return (
      <AssessmentTemplate
        title={questionLabel.replace('{0}', questionNumber)}
        question={assessment.currentQuestion.question}
        answers={assessment.currentQuestion.answers}
        difficulty={assessment.currentQuestion.difficulty}
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
        onPressNextButton={displayCurrentResult}
        modalVisible={modalData.modalVisible}
        onRequestClose={
          questionNumber !== System.MAX_NUMBER_OF_QUESTIONS
            ? bringNextQuestion
            : concludeAssessment
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

export default AssessmentScreen;
