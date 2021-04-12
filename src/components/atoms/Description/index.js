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
