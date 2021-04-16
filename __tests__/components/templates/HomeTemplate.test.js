import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {HomeTemplate} from '_components/templates';

const defaultProps = {
  title: 'Screen title',
  categories: [
    {id: 0, name: 'Category 0'},
    {id: 1, name: 'Category 1'},
    {id: 2, name: 'Category 2'},
    {id: 3, name: 'Category 3'},
  ],
  onItemSelected: jest.fn(),
};

it('renders correctly', () => {
  const {toJSON} = render(<HomeTemplate {...defaultProps} />);
  expect(toJSON()).toMatchSnapshot();
});

it('presses all the buttons successfully', () => {
  const {getByText} = render(<HomeTemplate {...defaultProps} />);
  defaultProps.categories.forEach(item => {
    fireEvent.press(getByText(item.name));
  });
  expect(defaultProps.onItemSelected).toBeCalledTimes(
    defaultProps.categories.length,
  );
});
