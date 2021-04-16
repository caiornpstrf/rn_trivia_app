import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {AnswersList} from '_components/organisms';

const data = ['Answer 0', 'Answer 1', 'Answer 2', 'Answer 3'];

it('renders correctly', () => {
  const {toJSON} = render(<AnswersList data={data} />);
  expect(toJSON()).toMatchSnapshot();
});

it('presses all the cards successfully', () => {
  const mockFn = jest.fn();
  const {getByText} = render(
    <AnswersList data={data} onItemSelected={mockFn} />,
  );
  data.forEach(item => {
    fireEvent.press(getByText(item));
  });
  expect(mockFn).toBeCalledTimes(data.length);
});
