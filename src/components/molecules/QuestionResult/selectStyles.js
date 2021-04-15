import {StyleSheet} from 'react-native';
import {Colors} from '_assets/styles';

const sharedStyles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2.5,
    aspectRatio: 1 / 1,
  },
  text: {
    marginTop: 15,
    color: Colors.text,
  },
};

const styles = {
  correct: {
    container: {
      ...sharedStyles.container,
      borderColor: Colors.success,
    },
    text: sharedStyles.text,
  },
  incorrect: {
    container: {
      ...sharedStyles.container,
      borderColor: Colors.error,
    },
    text: sharedStyles.text,
  },
};

export default (type = 'incorrect') => StyleSheet.create(styles[type]);
