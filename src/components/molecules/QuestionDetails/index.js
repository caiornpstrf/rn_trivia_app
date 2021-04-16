/**
 * @summary Displays relevant information about a question (label, question & difficulty)
 * @author Caio Reis <caio.oliveira.reis@gmail.com>
 *
 * Created at     : 2021-04-16 03:40:12
 * Last modified  : 2021-04-16 03:41:31
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
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
