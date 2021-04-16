import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

export const navigation = {navigate: jest.fn()};

const Stack = createStackNavigator();
const MockedNavigator = ({Component, params = {}}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MockedScreen" initialParams={params}>
          {props => <Component navigation={navigation} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MockedNavigator;
