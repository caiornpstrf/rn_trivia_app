import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {CategoryList} from '_components/organisms';

const data = [
  {id: 0, name: 'Category 0'},
  {id: 1, name: 'Category 1'},
  {id: 2, name: 'Category 2'},
  {id: 3, name: 'Category 3'},
];

it('renders correctly', () => {
  const {toJSON} = render(<CategoryList data={data} />);
  expect(toJSON()).toMatchSnapshot();
});

it('presses all the buttons successfully', () => {
  const mockFn = jest.fn();
  const {getByText} = render(
    <CategoryList data={data} onItemSelected={mockFn} />,
  );
  data.forEach(item => {
    fireEvent.press(getByText(item.name));
  });
  expect(mockFn).toBeCalledTimes(data.length);
});
