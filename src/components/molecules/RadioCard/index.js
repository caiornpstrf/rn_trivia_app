/**
 * Combines Atoms Card and Description can be toggled.
 * It is a Molecule in case a expansion is required.
 *
 * @summary Card with a Description that can be toggled.
 * @author Caio Reis <caio.oliveira.reis@gmail.com>
 *
 * Created at     : 2021-04-12 04:16:13
 * Last modified  : 2021-04-12 05:08:05
 */

import React from 'react';
import {StyleSheet, Pressable} from 'react-native';
import {bool, func, string} from 'prop-types';

import {Card, Description} from '_components/atoms';
import {Colors} from '_assets/styles';

const RadioCard = ({description, isSelected, onPress, style}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Card style={[style, isSelected && styles.selected]}>
        <Description>{description}</Description>
      </Card>
    </Pressable>
  );
};

RadioCard.propTypes = {
  description: string,
  isSelected: bool,
  onPress: func,
};

RadioCard.defaultProps = {
  description:
    'sdnas jdnasijdn aoisjd oiajsbd oiasbd iahsjbd ioasbdo iasbd iohjasbdi',
  isSelected: false,
  onPress: () => console.log('Pressed RadioCard'),
};

export default RadioCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  selected: {
    borderWidth: 2.5,
    borderColor: Colors.selection,
  },
});
