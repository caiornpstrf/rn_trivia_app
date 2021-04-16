import React from 'react';
import {render} from '@testing-library/react-native';
import {QuestionResult} from '_components/molecules';

const defaultProps = {
  correctLabel: 'Test correct',
  incorrectLabel: 'Test incorrect',
};

it('renders correct card correctly', () => {
  const {toJSON} = render(
    <QuestionResult {...defaultProps} isCorrect={true} />,
  );
  expect(toJSON()).toMatchSnapshot();
});

it('renders incorrect card correctly', () => {
  const {toJSON} = render(
    <QuestionResult {...defaultProps} isCorrect={false} />,
  );
  expect(toJSON()).toMatchSnapshot();
});
