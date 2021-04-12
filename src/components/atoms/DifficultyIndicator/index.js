/**
 * @summary Indicates difficulty using stars.
 * @author Caio Reis <caio.oliveira.reis@gmail.com>
 *
 * Created at     : 2021-04-11 16:20:17
 * Last modified  : 2021-04-11 16:58:07
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {number} from 'prop-types';

function DifficultyIndicator({currentDifficulty, maxDifficulty}) {
  return (
    <View style={styles.container}>
      <Text>{currentDifficulty}</Text>
      <Text>{maxDifficulty}</Text>
    </View>
  );
}

DifficultyIndicator.propTypes = {
  currentDifficulty: number.isRequired,
  maxDifficulty: number,
};

DifficultyIndicator.defaultProps = {
  maxDifficulty: null,
};

export default DifficultyIndicator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 20,
    minWidth: 60,
  },
});
