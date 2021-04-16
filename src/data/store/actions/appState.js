/**
 * @summary Actions specifics for app state
 * @author Caio Reis <caio.oliveira.reis@gmail.com>
 *
 * Created at     : 2021-04-16 03:50:35
 * Last modified  : 2021-04-16 03:50:35
 */

import {ReduxActions} from '_assets/constants';

export const isLoading = ({value}) => {
  return {
    type: ReduxActions.LOADING_STATUS,
    value,
  };
};

export const hasConnection = ({value}) => {
  return {
    type: ReduxActions.CONNECTED_STATUS,
    value,
  };
};

export const hasError = ({error}) => {
  return {
    type: ReduxActions.ERROR_STATUS,
    value: true,
    error,
  };
};
