const initialState = {
  isLoading: true,
  hasConnection: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING_STATUS': {
      return {
        ...state,
        isLoading: action.value,
      };
    }
    case 'CONNECTED_STATUS': {
      return {
        ...state,
        hasConnection: action.value,
      };
    }
    default: {
      return state;
    }
  }
};
