import {ReduxActions} from '_assets/constants';

const initialState = {
  isLoading: true,
  hasConnection: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ReduxActions.LOADING_STATUS: {
      return {
        ...state,
        isLoading: action.value,
      };
    }
    case ReduxActions.CONNECTED_STATUS: {
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
