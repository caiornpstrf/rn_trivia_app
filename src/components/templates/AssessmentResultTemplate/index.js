/**
 * @summary Summary of the result of an Assessment
 * @author Caio Reis <caio.oliveira.reis@gmail.com>
 *
 * Created at     : 2021-04-16 03:45:13
 * Last modified  : 2021-04-16 03:46:11
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Button, Title, Description} from '_components/atoms';
import {Colors} from '_assets/styles';
import {AssessmentStrings} from '_assets/constants';
import {string} from 'prop-types';
import {func} from 'prop-types';
import {object} from 'prop-types';

const placeListOfVariablesOnString = (label = '', list = []) => {
  let newLabel = label;
  for (let i = 0; i < list.length; i++) {
    newLabel = newLabel.replace(`{${i}}`, list[i]);
  }
  return newLabel;
};

const AssessmentResultTemplate = ({buttonLabel, onPress, resultsMapping}) => {
  const {result, resultDetails} = AssessmentStrings;
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Title size="big" style={styles.text}>
          {placeListOfVariablesOnString(result, resultsMapping.summary)}
        </Title>
        <Title size="medium" style={styles.text}>
          {resultDetails.title}
        </Title>
        <Description style={styles.text}>
          {placeListOfVariablesOnString(
            resultDetails.easy,
            resultsMapping.easy,
          )}
          {'\n'}
          {placeListOfVariablesOnString(
            resultDetails.medium,
            resultsMapping.medium,
          )}
          {'\n'}
          {placeListOfVariablesOnString(
            resultDetails.hard,
            resultsMapping.hard,
          )}
        </Description>
      </View>
      <Button label={buttonLabel} onPress={onPress} type="answer" />
    </View>
  );
};

AssessmentResultTemplate.propTypes = {
  buttonLabel: string,
  onPress: func,
  resultsMapping: object,
};

AssessmentResultTemplate.defaultProps = {
  buttonLabel: '',
  onPress: () => console.log('Pressed AssessmentResultTemplate button'),
  resultsMapping: {summary: [0, 0], easy: [0, 0], medium: [0, 0], hard: [0, 0]},
};

export default AssessmentResultTemplate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: Colors.background,
  },
  textContainer: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 20,
  },
  text: {
    marginBottom: 25,
  },
});
