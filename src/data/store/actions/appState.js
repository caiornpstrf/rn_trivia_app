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
