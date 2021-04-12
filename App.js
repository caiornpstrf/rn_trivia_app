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
import {QuestionDetails, QuestionResult} from '_components/molecules';
import {CategoryList} from '_components/organisms';
import {Colors} from '_assets/styles';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.header} />
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <QuestionResult />
          <View style={{flex:1}}>
            <CategoryList data={['a', 'b', 'c', 'd']} />
          </View>
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
