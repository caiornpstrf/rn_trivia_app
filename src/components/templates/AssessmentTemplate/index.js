import React from 'react';
import {StyleSheet, View} from 'react-native';
import {array, func, string} from 'prop-types';

import {QuestionDetails, QuestionResult} from '_components/molecules';
import {AnswersList} from '_components/organisms';

const AssessmentTemplate = ({
  title,
  question,
  difficulty,
  answers,
  onItemSelected,
}) => {
  return (
    <View style={styles.container}>
      <QuestionDetails
        title={title}
        question={question}
        difficulty={difficulty}
      />
      <AnswersList data={answers} onItemSelected={onItemSelected} />
    </View>
  );
};

AssessmentTemplate.propTypes = {
  title: string.isRequired,
  question: string.isRequired,
  difficulty: string.isRequired,
  answers: array.isRequired,
  onItemSelected: func.isRequired,
};

export default AssessmentTemplate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});
