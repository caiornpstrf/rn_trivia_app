/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar, View} from 'react-native';

import {
  Button,
  Card,
  Description,
  DifficultyIndicator,
  Title,
} from '_components/atoms';
import {Colors} from '_assets/styles';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.header} />
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Card>
            <Button type="answer" />
            <Description>Description</Description>
            <DifficultyIndicator />
            <Title>Title</Title>
          </Card>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 0,
    backgroundColor: Colors.primary,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});

export default App;
