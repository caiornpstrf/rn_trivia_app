/**
 * @summary Title labels with different size choices
 * @author Caio Reis <caio.oliveira.reis@gmail.com>
 *
 * Created at     : 2021-04-11 19:57:02
 * Last modified  : 2021-04-11 20:08:11
 */

import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {oneOf} from 'prop-types';

import {Colors, StyleHelpers} from '_assets/styles';

const sizeMapping = {
  small: StyleHelpers.normalize(12),
  medium: StyleHelpers.normalize(16),
  big: StyleHelpers.normalize(20),
};

const Title = ({children, size}) => {
  return (
    <Text style={[styles.text, {fontSize: sizeMapping[size]}]}>{children}</Text>
  );
};

Title.propTypes = {
  size: oneOf(['small', 'medium', 'big']),
};

Title.defaultProps = {
  size: 'medium',
};

export default Title;

const styles = StyleSheet.create({
  text: {
    color: Colors.title,
    fontWeight: 'bold',
  },
});
