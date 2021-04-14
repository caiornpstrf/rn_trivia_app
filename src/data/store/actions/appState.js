export const isLoading = ({value}) => {
  return {
    type: 'LOADING_STATUS',
    value,
  };
};

export const hasConnection = ({value}) => {
  return {
    type: 'CONNECTION_STATUS',
    value,
  };
};

export const hasError = ({error}) => {
  return {
    type: 'ERROR_STATUS',
    value: true,
    error,
  };
};
