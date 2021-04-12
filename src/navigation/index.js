import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home, Assessment} from '_screens';

import {defaultOptions} from './options';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={defaultOptions('Home')}
      />
      <Stack.Screen
        name="Assessment"
        component={Assessment}
        options={defaultOptions()}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
