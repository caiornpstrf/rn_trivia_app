/**
 * @summary Custom button with multiple styles to chose from.
 * @author Caio Reis <caio.oliveira.reis@gmail.com>
 *
 * Created at     : 2021-04-11 19:57:42
 * Last modified  : 2021-04-12 06:38:14
 */
import React from 'react';
import {Text, Pressable} from 'react-native';
import {func, oneOf, string} from 'prop-types';

import selectStyles from './selectStyles';

const Button = ({label, type, onPress, style}) => {
  const styles = selectStyles(type);
  return (
    <Pressable
      style={({pressed}) => [
        styles.container,
        style,
        pressed && {opacity: 0.8},
      ]}
      onPress={onPress}>
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
  label: '',
  type: 'default',
  onPress: () => console.log('Pressed Button'),
};

export default Button;
