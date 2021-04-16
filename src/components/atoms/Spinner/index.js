/**
 * @summary Standardized ActivityIndicator
 * @author Caio Reis <caio.oliveira.reis@gmail.com>
 *
 * Created at     : 2021-04-16 03:38:42
 * Last modified  : 2021-04-16 03:39:10
 */

import React from 'react';
import {StyleSheet, ActivityIndicator, View} from 'react-native';

import {Colors} from '_assets/styles';

const Spinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={Colors.primary} />
    </View>
  );
};

export default Spinner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
