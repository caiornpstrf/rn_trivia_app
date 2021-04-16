/**
 * @summary Dynamic styles for Button
 * @author Caio Reis <caio.oliveira.reis@gmail.com>
 *
 * Created at     : 2021-04-16 03:33:13
 * Last modified  : 2021-04-16 03:33:37
 */

import {StyleSheet} from 'react-native';
import {Colors, ShadowStyles, StyleHelpers} from '_assets/styles';

const sharedStyles = {
  container: {
    // General
    height: 45,
    // Alignment
    alignItems: 'center',
    justifyContent: 'center',
    // Border
    borderRadius: 10,
    ...ShadowStyles,
  },
  text: {
    fontSize: StyleHelpers.normalize(14),
    fontWeight: 'bold',
  },
};

const styles = {
  // Default styles used in most
  default: {
    container: {
      ...sharedStyles.container,
      // General
      backgroundColor: Colors.button,
      // Border
      borderColor: Colors.altTitle,
      borderWidth: 1,
    },
    text: {
      ...sharedStyles.text,
      color: Colors.altTitle,
    },
  },
  answer: {
    container: {
      ...sharedStyles.container,
      // General
      backgroundColor: Colors.answerButton,
    },
    text: {
      ...sharedStyles.text,
      color: Colors.background,
    },
  },
};

export default (type = 'default') => StyleSheet.create(styles[type]);
