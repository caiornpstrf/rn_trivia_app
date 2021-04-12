/**
 * @summary list of answers of a given Question
 * @author Caio Reis <caio.oliveira.reis@gmail.com>
 *
 * Created at     : 2021-04-12 06:35:17
 * Last modified  : 2021-04-12 06:36:03
 */

import React, {useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {array, func} from 'prop-types';

import {RadioCard} from '_components/molecules';

const AnswersList = ({data, onItemSelected}) => {
  const [selected, setSelected] = useState('');
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {data.map((item, index) => (
        <RadioCard
          key={`answer_${index}`}
          description={item}
          onPress={() => {
            onItemSelected({item, index});
            setSelected(item);
          }}
          isSelected={item === selected}
          style={styles.card}
        />
      ))}
    </ScrollView>
  );
};

AnswersList.propTypes = {
  data: array.isRequired,
  onItemSelected: func,
};

AnswersList.defaultProps = {
  onItemSelected: ({item, index}) => console.log(`Selected index: ${index}`),
};

export default AnswersList;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    marginBottom: 20,
  },
});
