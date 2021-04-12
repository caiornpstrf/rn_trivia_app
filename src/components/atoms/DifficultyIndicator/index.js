/**
 * @summary Indicates difficulty using stars.
 * @author Caio Reis <caio.oliveira.reis@gmail.com>
 *
 * Created at     : 2021-04-11 16:20:17
 * Last modified  : 2021-04-12 03:51:35
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {string} from 'prop-types';

import {Icon} from '_components/atoms';
import {Colors} from 'assets/styles';

const difficultyMapping = {
  easy: 0,
  medium: 1,
  hard: 2,
};

const renderIconList = (currentDifficultyNumber, maxDifficulty) => {
  let iconsList = [];
  for (let i = 0; i < maxDifficulty; i++) {
    iconsList.push(
      <Icon
        key={'icon_' + i}
        name="star"
        color={i <= currentDifficultyNumber ? Colors.title : Colors.disabled}
      />,
    );
  }

  return iconsList;
};

const DifficultyIndicator = ({currentDifficulty /* , maxDifficulty */}) => {
  const iconsList = renderIconList(difficultyMapping[currentDifficulty], 3);
  return (
    <View style={styles.container}>
      <View style={styles.stars}>{iconsList}</View>
      <Text style={styles.text}>{currentDifficulty}</Text>
    </View>
  );
};

DifficultyIndicator.propTypes = {
  currentDifficulty: string,
  //maxDifficulty: number,
};

DifficultyIndicator.defaultProps = {
  currentDifficulty: 'medium',
  //maxDifficulty: 3,
};

export default DifficultyIndicator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxHeight: 30,
    minWidth: 60,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: Colors.altBackground,
  },
  stars: {
    flexDirection: 'row',
  },
  text: {
    color: Colors.title,
    textTransform: 'capitalize',
  },
});
