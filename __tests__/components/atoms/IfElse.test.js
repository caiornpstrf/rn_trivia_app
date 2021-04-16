import React from 'react';
import {Text} from 'react-native';
import {render} from '@testing-library/react-native';
import {IfElse} from '_components/atoms';

const baseProps = {
  onTrue: <Text>{'onTrue rendered'}</Text>,
  onFalse: <Text>{'onFalse rendered'}</Text>,
};

it('renders onTrue correctly', () => {
  const {toJSON} = render(<IfElse {...baseProps} condition={true} />);
  expect(toJSON()).toMatchSnapshot();
});

it('renders onFalse correctly', () => {
  const {toJSON} = render(<IfElse {...baseProps} condition={false} />);
  expect(toJSON()).toMatchSnapshot();
});
