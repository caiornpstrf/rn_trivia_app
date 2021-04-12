/**
 * @summary Generic Card with built-in shadow.
 * @author Caio Reis <caio.oliveira.reis@gmail.com>
 *
 * Created at     : 2021-04-12 06:37:03 
 * Last modified  : 2021-04-12 06:37:24
 */

import {StyleSheet} from 'react-native';
import {Colors, ShadowStyles} from '_assets/styles';

const styles = StyleSheet.create({
  container: {
    // General
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
