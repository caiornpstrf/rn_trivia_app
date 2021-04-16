import React from 'react';

import {AssessmentPersistence} from '_model/Assessment';
import AsyncHandler from '_model/AsyncHandler';
import {Home} from '_screens';

import {act, fireEvent, render} from '_testUtils/render';
import MockedNavigator, {navigation} from '_testUtils/mockedNavigator';

const questions = {
  categoryList: [
    {
      id: 9,
      name: 'General Knowledge',
    },
    {
      id: 10,
      name: 'Entertainment: Books',
    },
    {
      id: 11,
      name: 'Entertainment: Film',
    },
  ],
};

function renderHomeScreen() {
  return render(<MockedNavigator Component={Home} />, {
    initialState: {
      questions,
      appState: {},
    },
  });
}

describe('Home', () => {
  beforeAll(() => {
    AssessmentPersistence.retrieveData = jest.fn();
    AsyncHandler.fetchData = jest.fn();
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('Renders default correctly', () => {
    const {toJSON} = renderHomeScreen();
    expect(toJSON).toMatchSnapshot();
  });

  it('Press the first category', () => {
    const {getByText} = renderHomeScreen();
    act(() => {
      fireEvent.press(getByText(questions.categoryList[0].name));
    });
    expect(AssessmentPersistence.retrieveData).toBeCalled();
  });
});
