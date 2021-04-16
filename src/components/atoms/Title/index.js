/**
 * @summary Title labels with different size choices
 * @author Caio Reis <caio.oliveira.reis@gmail.com>
 *
 * Created at     : 2021-04-11 19:57:02
 * Last modified  : 2021-04-16 03:39:20
 */

import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {oneOf} from 'prop-types';

import {Colors, StyleHelpers} from '_assets/styles';

const sizeMapping = {
  small: StyleHelpers.normalize(12),
  medium: StyleHelpers.normalize(15),
  big: StyleHelpers.normalize(18),
};

const Title = ({children, size, style}) => {
  return (
    <Text style={[styles.text, style, {fontSize: sizeMapping[size]}]}>
      {children}
    </Text>
  );
};

Title.propTypes = {
  size: oneOf(['small', 'medium', 'big']),
};

Title.defaultProps = {
  size: 'small',
};

export default Title;

const styles = StyleSheet.create({
  text: {
    color: Colors.title,
    fontWeight: 'bold',
  },
});
