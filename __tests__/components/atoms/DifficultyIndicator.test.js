import React from 'react';
import {render} from '@testing-library/react-native';
import {DifficultyIndicator} from '_components/atoms';

const difficulties = {
  easy: 'easy',
  medium: 'medium',
  hard: 'hard',
};

it('renders on easy difficulty correctly', () => {
  const {toJSON} = render(
    <DifficultyIndicator currentDifficulty={difficulties.easy} />,
  );
  expect(toJSON()).toMatchSnapshot();
});

it('renders on medium difficulty correctly', () => {
  const {toJSON} = render(
    <DifficultyIndicator currentDifficulty={difficulties.medium} />,
  );
  expect(toJSON()).toMatchSnapshot();
});

it('renders on hard difficulty correctly', () => {
  const {toJSON} = render(
    <DifficultyIndicator currentDifficulty={difficulties.hard} />,
  );
  expect(toJSON()).toMatchSnapshot();
});
