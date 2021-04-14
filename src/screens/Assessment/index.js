/**
 * @summary Assessment screen
 * @author Caio Reis <caio.oliveira.reis@gmail.com>
 *
 * Created at     : 2021-04-14 03:43:37
 * Last modified  : 2021-04-14 07:28:48
 */

/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {Spinner} from 'components/atoms';
import {AssessmentTemplate} from '_components/templates';

const onItemSelected = (category, index, navigation) => {
  //navigation.navigate('Assessment');
};

const Assessment = ({route, navigation}) => {
  const {category = ''} = route.params || {};
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const questionList = useSelector(state => state.questions.questionList);
  const dispatch = useDispatch();

  const isInvalidList =
    !questionList || (questionList && questionList.length === 0);

  useEffect(() => {
    if (isInvalidList) {
      dispatch({type: 'FETCH_QUESTION_LIST', category});
    }
  }, [questionList]);

  if (isInvalidList) {
    return <Spinner />;
  }
  return (
    <AssessmentTemplate
      title="Question 1"
      question={questionList[0].question}
      answers={questionList[0].answers}
      difficulty={questionList[0].difficulty}
      onItemSelected={({item, index}) => {
        setSelectedAnswer(item);
      }}
      displayNextButton={Boolean(selectedAnswer)}
      nextButtonLabel="Submit"
      onPressNextButton={() => {
        console.warn(selectedAnswer === questionList[0].correctAnswer);
      }}
    />
  );
};

export default Assessment;
