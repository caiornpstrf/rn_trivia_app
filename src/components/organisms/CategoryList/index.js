/**
 * @summary List of Buttons used to select a category
 * @author Caio Reis <caio.oliveira.reis@gmail.com>
 *
 * Created at     : 2021-04-12 06:00:13
 * Last modified  : 2021-04-14 02:58:28
 */

import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {array, func} from 'prop-types';

import {Button} from '_components/atoms';

const CategoryList = ({data, onItemSelected}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {data.map((item, index) => (
        <Button
          key={item.id}
          label={item.name}
          onPress={() => onItemSelected({item, index})}
          style={styles.card}
        />
      ))}
    </ScrollView>
  );
};

CategoryList.propTypes = {
  data: array.isRequired,
  onItemSelected: func,
};

CategoryList.defaultProps = {
  onItemSelected: ({item, index}) => console.log(`Selected index: ${index}`),
};

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  card: {
    marginBottom: 15,
  },
});
