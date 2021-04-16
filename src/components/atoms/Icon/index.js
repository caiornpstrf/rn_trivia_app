/**
 * @summary Custom Icon made using Vector Icons as base
 * @author Caio Reis <caio.oliveira.reis@gmail.com>
 *
 * Created at     : 2021-04-12 02:59:55
 * Last modified  : 2021-04-16 03:35:41
 */

import React from 'react';
import {number, string} from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';

const CustomIcon = ({name, size, color, ...rest}) => {
  return <Icon name={name} size={size} color={color} {...rest} />;
};

CustomIcon.propTypes = {
  name: string.isRequired,
  size: number,
  color: string.isRequired,
};

CustomIcon.defaultProps = {
  size: 12,
};

export default CustomIcon;
