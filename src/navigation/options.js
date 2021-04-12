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
