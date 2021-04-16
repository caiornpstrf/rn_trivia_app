import React from 'react';
import {render} from '@testing-library/react-native';
import {Spinner} from '_components/atoms';

it('renders default correctly', () => {
  const {toJSON} = render(<Spinner />);
  expect(toJSON()).toMatchSnapshot();
});
