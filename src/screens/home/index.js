import React from 'react';

import {HomeTemplate} from '_components/templates';

const mockCategories = ['History', 'Geo', 'Myth', 'Math'];
const mockQuestions = [
  {
    question: 'Question?',
    difficulty: 'easy',
    answers: ['false', 'true'],
  },
  {
    question: 'Question?',
    difficulty: 'medium',
    answers: ['false', 'true'],
  },
  {
    question: 'Question?',
    difficulty: 'hard',
    answers: ['false', 'true'],
  },
];

const onItemSelected = (category, index, navigation) => {
  navigation.navigate('Assessment', {
    questionList: mockQuestions,
    category: 'History',
  });
};

const Home = ({navigation}) => {
  return (
    <HomeTemplate
      title="Categories"
      categories={mockCategories}
      onItemSelected={({item, index}) =>
        onItemSelected(item, index, navigation)
      }
    />
  );
};

export default Home;
