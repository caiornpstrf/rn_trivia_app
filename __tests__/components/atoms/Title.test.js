import React from 'react';
import {render} from '@testing-library/react-native';
import {Title} from '_components/atoms';

const text = 'Title text';
const sizes = {
  small: 'small',
  medium: 'medium',
  big: 'big',
};

it('renders with size small correctly', () => {
  const {toJSON} = render(<Title size={sizes.small}>{text}</Title>);
  expect(toJSON()).toMatchSnapshot();
});

it('renders with size medium correctly', () => {
  const {toJSON} = render(<Title size={sizes.medium}>{text}</Title>);
  expect(toJSON()).toMatchSnapshot();
});

it('renders with size big correctly', () => {
  const {toJSON} = render(<Title size={sizes.big}>{text}</Title>);
  expect(toJSON()).toMatchSnapshot();
});
