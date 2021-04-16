import React from 'react';
import {Text} from 'react-native';
import {render} from '@testing-library/react-native';
import {Card} from '_components/atoms';

const text = 'Body text';

it('renders default style correctly', () => {
  const {toJSON} = render(<Card />);
  expect(toJSON()).toMatchSnapshot();
});

it('renders answer with child correctly', () => {
  const {toJSON} = render(
    <Card>
      <Text>{text}</Text>
    </Card>,
  );
  expect(toJSON()).toMatchSnapshot();
});
