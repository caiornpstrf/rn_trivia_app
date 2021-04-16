/**
 * @summary Generic Card with built-in shadow
 * @author Caio Reis <caio.oliveira.reis@gmail.com>
 *
 * Created at     : 2021-04-16 03:34:10
 * Last modified  : 2021-04-16 03:34:10
 */

import React from 'react';
import {View} from 'react-native';

import styles from './styles';

const Card = ({children, style}) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default Card;
