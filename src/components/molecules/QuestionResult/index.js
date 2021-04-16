/**
 * A visual representation of the result of a question.
 * If correct show a positive view, else a negative view.
 *
 * @summary Result of a Question
 * @author Caio Reis <caio.oliveira.reis@gmail.com>
 *
 * Created at     : 2021-04-12 06:36:21
 * Last modified  : 2021-04-16 03:42:21
 */

import React from 'react';
import {bool, string} from 'prop-types';

import {Card, Icon, Title} from '_components/atoms';
import {Colors, StyleHelpers} from '_assets/styles';

import selectStyles from './selectStyles';

const QuestionResult = ({isCorrect, correctLabel, incorrectLabel}) => {
  const styles = selectStyles(isCorrect ? 'correct' : 'incorrect');
  const iconProps = {
    name: isCorrect ? 'check-circle' : 'times-circle',
    color: isCorrect ? Colors.success : Colors.error,
    size: StyleHelpers.normalize(50),
  };

  return (
    <Card style={styles.container}>
      <Icon {...iconProps} />
      <Title size="medium" style={styles.text}>
        {isCorrect ? correctLabel : incorrectLabel}
      </Title>
    </Card>
  );
};

QuestionResult.propTypes = {
  isCorrect: bool,
  correctLabel: string,
  incorrectLabel: string,
};

QuestionResult.defaultProps = {
  isCorrect: false,
  correctLabel: '',
  incorrectLabel: '',
};

export default QuestionResult;
