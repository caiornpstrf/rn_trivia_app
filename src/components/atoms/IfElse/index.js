/* eslint-disable react-native/no-inline-styles */
/**
 * @summary Components that renders other components conditionally
 * @author Caio Reis <caio.oliveira.reis@gmail.com>
 *
 * Created at     : 2021-04-12 03:10:37
 * Last modified  : 2021-04-16 03:38:29
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
  // An invisible View to prevent the component from rendering 'undefined' in case we don't want to render onFalse
  onFalse: <View style={{display: 'none'}} />,
};

export default IfElse;
