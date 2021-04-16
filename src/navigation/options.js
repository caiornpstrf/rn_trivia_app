/**
 * @summary Collection of custom options for navigation objects
 * @author Caio Reis <caio.oliveira.reis@gmail.com>
 *
 * Created at     : 2021-04-16 03:52:36
 * Last modified  : 2021-04-16 03:52:56
 */

import {Colors} from '_assets/styles';

export const defaultOptions = (title = '') => {
  return {
    title,
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerTintColor: Colors.lightText,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerTitleAlign: 'left',
    headerLeft: null,
  };
};
