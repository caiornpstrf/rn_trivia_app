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
