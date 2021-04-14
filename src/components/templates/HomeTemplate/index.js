import React from 'react';
import {StyleSheet, View} from 'react-native';
import {array, func, string} from 'prop-types';

import {Title} from '_components/atoms';
import {CategoryList} from '_components/organisms';
import {Colors} from '_assets/styles';

const HomeTemplate = ({title, categories, onItemSelected}) => {
  return (
    <View style={styles.container}>
      <Title size="big" style={styles.title}>
        {title}
      </Title>
      <CategoryList data={categories} onItemSelected={onItemSelected} />
    </View>
  );
};

HomeTemplate.propTypes = {
  title: string.isRequired,
  categories: array.isRequired,
  onItemSelected: func.isRequired,
};

export default HomeTemplate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: Colors.background,
  },
  title: {
    marginBottom: 40,
  },
});
