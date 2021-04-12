/**
 * @summary Custom Icon made using Vector Icons as base
 * @author Caio Reis <caio.oliveira.reis@gmail.com>
 *
 * Created at     : 2021-04-12 02:59:55
 * Last modified  : 2021-04-12 05:27:15
 */

import React from 'react';
import {number, string} from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';

const CustomIcon = ({name, size, color, ...rest}) => {
  return <Icon name={name} size={size} color={color} {...rest} />;
};

CustomIcon.propTypes = {
  name: string,
  size: number,
  color: string,
};

CustomIcon.defaultProps = {
  name: 'star',
  size: 12,
  color: '#000',
};

export default CustomIcon;
