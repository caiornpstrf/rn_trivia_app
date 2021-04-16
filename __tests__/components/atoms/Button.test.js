import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Button} from '_components/atoms';

const baseProps = {
  label: 'Submit',
};
const types = {
  answer: 'answer',
};

it('renders default style correctly', () => {
  const {toJSON} = render(<Button {...baseProps} />);
  expect(toJSON()).toMatchSnapshot();
});

it('renders answer style correctly', () => {
  const {toJSON} = render(<Button {...baseProps} type={types.answer} />);
  expect(toJSON()).toMatchSnapshot();
});

it('presses the button successfully', () => {
  const mockFn = jest.fn();
  const {getByText} = render(<Button {...baseProps} onPress={mockFn} />);
  fireEvent.press(getByText(baseProps.label));
  expect(mockFn).toBeCalled();
});
