import {StyleSheet} from 'react-native';
import {Colors, ShadowStyles} from '_assets/styles';

const styles = StyleSheet.create({
  container: {
    // General
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 15,
    paddingVertical: 20,
    // Border
    borderRadius: 10,
    // Alignment
    ...ShadowStyles,
  },
});

export default styles;
