import React from 'react';
import {render} from '@testing-library/react-native';
import {Description} from '_components/atoms';

const text = 'Description text';

it('renders default correctly', () => {
  const {toJSON} = render(<Description>{text}</Description>);
  expect(toJSON()).toMatchSnapshot();
});
