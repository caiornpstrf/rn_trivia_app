/**
 * @summary Main app screen
 * @author Caio Reis <caio.oliveira.reis@gmail.com>
 *
 * Created at     : 2021-04-14 02:52:26
 * Last modified  : 2021-04-14 05:14:22
 */
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

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
    category: category,
  });
};

const Home = ({navigation}) => {
  const categoryList = useSelector(state => state.questions.categoryList);

  return (
    <HomeTemplate
      title="Categories"
      categories={categoryList}
      onItemSelected={({item, index}) =>
        onItemSelected(item, index, navigation)
      }
    />
  );
};

export default Home;
