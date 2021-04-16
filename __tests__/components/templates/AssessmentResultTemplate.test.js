import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {AssessmentResultTemplate} from '_components/templates';

const defaultProps = {
  buttonLabel: 'Screen button',
  resultsMapping: {
    summary: [8, 10],
    easy: [2, 2],
    medium: [2, 3],
    hard: [5, 5],
  },
  onPress: jest.fn(),
};

it('renders correctly', () => {
  const {toJSON} = render(<AssessmentResultTemplate {...defaultProps} />);
  expect(toJSON()).toMatchSnapshot();
});

it('presses the main button successfully', () => {
  const {getByText} = render(<AssessmentResultTemplate {...defaultProps} />);
  fireEvent.press(getByText(defaultProps.buttonLabel));
  expect(defaultProps.onPress).toBeCalled();
});
