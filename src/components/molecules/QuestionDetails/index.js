import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {oneOf, string} from 'prop-types';

import {Description, DifficultyIndicator, Title} from 'components/atoms';

const QuestionDetails = ({title, question, difficulty}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Title style={styles.title} size="medium">
          {title}
        </Title>
        <DifficultyIndicator currentDifficulty={difficulty} />
      </View>
      <Description>{question}</Description>
    </View>
  );
};

QuestionDetails.propTypes = {
  title: string,
  question: string,
  difficulty: oneOf(['easy', 'medium', 'hard']),
};

QuestionDetails.defaultProps = {
  title: '',
  question: '',
  difficulty: 'easy',
};

export default QuestionDetails;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  top: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    flex: 1,
  },
});
