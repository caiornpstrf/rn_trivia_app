/**
 * @summary Main app screen
 * @author Caio Reis <caio.oliveira.reis@gmail.com>
 *
 * Created at     : 2021-04-14 02:52:26
 * Last modified  : 2021-04-15 08:53:49
 */
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';

import {HomeTemplate} from '_components/templates';
import {ReduxActions} from '_assets/constants';

const onItemSelected = (category, index, navigation) => {
  navigation.navigate('Assessment', {category: category});
};

const Home = ({navigation}) => {
  const categoryList = useSelector(state => state.questions.categoryList);
  const dispatch = useDispatch();

  useFocusEffect(() => {
    dispatch({type: ReduxActions.RESET_QUESTION_LIST});
  });

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
