import React from 'react';
import {render} from '@testing-library/react-native';
import {QuestionDetails} from '_components/molecules';

const baseProps = {
  title: 'Question title',
  question: 'Is this a test question?',
};
const difficulties = {
  easy: 'easy',
  medium: 'medium',
  hard: 'hard',
};

it('renders on easy difficulty correctly', () => {
  const {toJSON} = render(
    <QuestionDetails {...baseProps} difficulty={difficulties.easy} />,
  );
  expect(toJSON()).toMatchSnapshot();
});

it('renders on medium difficulty correctly', () => {
  const {toJSON} = render(
    <QuestionDetails {...baseProps} difficulty={difficulties.medium} />,
  );
  expect(toJSON()).toMatchSnapshot();
});

it('renders on hard difficulty correctly', () => {
  const {toJSON} = render(
    <QuestionDetails {...baseProps} difficulty={difficulties.hard} />,
  );
  expect(toJSON()).toMatchSnapshot();
});
