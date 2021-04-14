/**
 * @summary Simple loop component to render multiple children
 * @author Caio Reis <caio.oliveira.reis@gmail.com>
 *
 * Created at     : 2021-04-12 03:10:37
 * Last modified  : 2021-04-14 07:27:59
 */
import React from 'react';
import {View} from 'react-native';
import {bool, node} from 'prop-types';

const IfElse = ({condition, onTrue, onFalse}) => {
  if (condition) {
    return <>{onTrue}</>;
  }
  return <>{onFalse}</>;
};

IfElse.propTypes = {
  condition: bool.isRequired,
  onTrue: node.isRequired,
  onFalse: node,
};

IfElse.defaultProps = {
  // eslint-disable-next-line react-native/no-inline-styles
  onFalse: <View style={{display: 'none'}} />,
};

export default IfElse;
