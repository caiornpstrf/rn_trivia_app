import React from 'react';
import {render} from '@testing-library/react-native';
import {Icon} from '_components/atoms';

const baseProps = {
  name: 'star',
  color: '#000',
};

it('renders default correctly', () => {
  const {toJSON} = render(<Icon {...baseProps} />);
  expect(toJSON()).toMatchSnapshot();
});
