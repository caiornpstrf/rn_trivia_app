/**
 * @summary Custom button that fits the app style
 * @author Caio Reis <caio.oliveira.reis@gmail.com>
 *
 * Created at     : 2021-04-11 19:57:42
 * Last modified  : 2021-04-11 20:44:51
 */

import React from 'react';
import {Text, Pressable} from 'react-native';
import {func, oneOf, string} from 'prop-types';

import selectStyles from './selectStyles';

const Button = ({label, type, onPress}) => {
  const styles = selectStyles(type);
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

Button.propTypes = {
  label: string,
  type: oneOf(['default', 'answer']),
  onPress: func,
};

Button.defaultProps = {
  label: 'Default Label',
  type: 'default',
  onPress: () => console.log('Pressed button'),
};

export default Button;
