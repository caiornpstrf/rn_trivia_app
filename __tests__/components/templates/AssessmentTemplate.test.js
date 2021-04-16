import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {AssessmentTemplate} from '_components/templates';

const defaultProps = {
  title: 'Question Title',
  question: 'Is this a test question?',
  difficulty: 'easy',
  answers: ['Answer 0', 'Answer 1', 'Answer 2', 'Answer 3'],
  onItemSelected: jest.fn(),
  displayNextButton: false,
  nextButtonLabel: 'Submit',
  onPressNextButton: jest.fn(),
  modalVisible: false,
  onRequestClose: jest.fn(),
  correctLabel: 'Correct test',
  incorrectLabel: 'Incorrect test',
  isCorrect: false,
};

it('renders default correctly', () => {
  const {toJSON} = render(<AssessmentTemplate {...defaultProps} />);
  expect(toJSON()).toMatchSnapshot();
});

it('renders medium question correctly', () => {
  const {toJSON} = render(
    <AssessmentTemplate {...defaultProps} difficulty="medium" />,
  );
  expect(toJSON()).toMatchSnapshot();
});

it('renders hard question correctly', () => {
  const {toJSON} = render(
    <AssessmentTemplate {...defaultProps} difficulty="hard" />,
  );
  expect(toJSON()).toMatchSnapshot();
});

it('renders with button correctly', () => {
  const {toJSON} = render(
    <AssessmentTemplate {...defaultProps} displayNextButton={true} />,
  );
  expect(toJSON()).toMatchSnapshot();
});

it('renders with correct answer modal correctly', () => {
  const {toJSON} = render(
    <AssessmentTemplate
      {...defaultProps}
      modalVisible={true}
      isCorrect={true}
    />,
  );
  expect(toJSON()).toMatchSnapshot();
});

it('renders with incorrect answer modal correctly', () => {
  const {toJSON} = render(
    <AssessmentTemplate
      {...defaultProps}
      modalVisible={true}
      isCorrect={false}
    />,
  );
  expect(toJSON()).toMatchSnapshot();
});

it('pressed the main button successfully', () => {
  const {getByText} = render(
    <AssessmentTemplate {...defaultProps} displayNextButton={true} />,
  );
  fireEvent.press(getByText(defaultProps.nextButtonLabel));
  expect(defaultProps.onPressNextButton).toBeCalled();
});

it('pressed all the answers successfully', () => {
  const {getByText} = render(<AssessmentTemplate {...defaultProps} />);
  defaultProps.answers.forEach(item => {
    fireEvent.press(getByText(item));
  });
  expect(defaultProps.onItemSelected).toBeCalledTimes(
    defaultProps.answers.length,
  );
});

it('pressed the modal successfully', () => {
  const {getByText} = render(
    <AssessmentTemplate
      {...defaultProps}
      modalVisible={true}
      isCorrect={true}
    />,
  );
  fireEvent.press(getByText(defaultProps.correctLabel));
  expect(defaultProps.onRequestClose).toBeCalled();
});
