import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {RadioCard} from '_components/molecules';

const baseProps = {
  description: 'This is the card description',
};

it('renders default correctly', () => {
  const {toJSON} = render(<RadioCard {...baseProps} />);
  expect(toJSON()).toMatchSnapshot();
});

it('renders selected correctly', () => {
  const {toJSON} = render(<RadioCard {...baseProps} isSelected={true} />);
  expect(toJSON()).toMatchSnapshot();
});

it('presses the card successfully', () => {
  const mockFn = jest.fn();
  const {getByText} = render(<RadioCard {...baseProps} onPress={mockFn} />);
  fireEvent.press(getByText(baseProps.description));
  expect(mockFn).toBeCalled();
});
