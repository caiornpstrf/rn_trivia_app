/**
 * @summary Simple loop component to render multiple children
 * @author Caio Reis <caio.oliveira.reis@gmail.com>
 *
 * Created at     : 2021-04-12 03:10:37
 * Last modified  : 2021-04-12 03:37:08
 */
import {bool, node} from 'prop-types';
import React from 'react';

const IfElse = ({condition, onTrue, onFalse}) => {
  if (condition) {
    return <>{onTrue}</>;
  }
  return <>{onFalse}</>;
};

IfElse.propTypes = {
  condition: bool.isRequired,
  onTrue: node.isRequired,
  onFalse: node.isRequired,
};

export default IfElse;
