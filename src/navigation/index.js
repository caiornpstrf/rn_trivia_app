/**
 * @summary App's main Navigation component
 * @author Caio Reis <caio.oliveira.reis@gmail.com>
 *
 * Created at     : 2021-04-14 01:21:45
 * Last modified  : 2021-04-15 15:39:58
 */

/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';

import {Spinner} from '_components/atoms';
import {ReduxActions} from '_assets/constants';
import {Home, AssessmentScreen} from '_screens';

import {defaultOptions} from './options';

const Stack = createStackNavigator();

const RootNavigation = () => {
  //const [isLoading, setLoading] = useState(true);
  const isLoading = useSelector(state => state.appState.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: ReduxActions.FETCH_CATEGORY_LIST});
  }, [isLoading]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={defaultOptions('Home')}
      />
      <Stack.Screen
        name="Assessment"
        component={AssessmentScreen}
        options={({route}) => {
          const {category = ''} = route.params || {};
          return defaultOptions(category.name);
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
