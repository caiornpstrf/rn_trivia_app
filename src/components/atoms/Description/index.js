/**
 * @summary Standardized Text component to fit descriptions
 * @author Caio Reis <caio.oliveira.reis@gmail.com>
 *
 * Created at     : 2021-04-16 03:34:22
 * Last modified  : 2021-04-16 03:34:50
 */

import React from 'react';
import {StyleSheet, Text} from 'react-native';

import {Colors, StyleHelpers} from '_assets/styles';

const Description = ({children}) => {
  return <Text style={styles.text}>{children}</Text>;
};

export default Description;

const styles = StyleSheet.create({
  text: {
    color: Colors.text,
    fontSize: StyleHelpers.normalize(12),
  },
});
