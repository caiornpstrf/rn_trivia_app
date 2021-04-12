import React from 'react';

import {AssessmentTemplate} from '_components/templates';

const onItemSelected = (category, index, navigation) => {
  navigation.navigate('Assessment');
};

const Home = ({route, navigation}) => {
  const {questionList, category} = route.params;
  navigation.setOptions({title: category});
  return (
    <AssessmentTemplate
      title="Question 1"
      question={questionList[0].question}
      answers={questionList[0].answers}
      difficulty={questionList[0].difficulty}
      onItemSelected={({item, index}) =>
        onItemSelected(item, index, navigation)
      }
    />
  );
};

export default Home;
