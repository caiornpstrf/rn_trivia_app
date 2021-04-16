/**
 * @summary Displays every info of a Question, allows for answer selection & displays the result
 * @author Caio Reis <caio.oliveira.reis@gmail.com>
 *
 * Created at     : 2021-04-16 03:46:18
 * Last modified  : 2021-04-16 03:47:37
 */

import React from 'react';
import {StyleSheet, View, Modal, Pressable} from 'react-native';
import {array, func, string, bool} from 'prop-types';

import {Button, IfElse} from '_components/atoms';
import {QuestionDetails, QuestionResult} from '_components/molecules';
import {AnswersList} from '_components/organisms';
import {Colors} from '_assets/styles';

const AssessmentTemplate = ({
  title,
  question,
  difficulty,
  answers,
  onItemSelected,
  displayNextButton,
  nextButtonLabel,
  onPressNextButton,
  modalVisible,
  onRequestClose,
  correctLabel,
  incorrectLabel,
  isCorrect,
}) => {
  return (
    <View style={styles.container}>
      <QuestionDetails
        title={title}
        question={question}
        difficulty={difficulty}
      />
      <AnswersList data={answers} onItemSelected={onItemSelected} />
      <IfElse
        condition={displayNextButton}
        onTrue={
          <View style={styles.buttonContainer}>
            <Button
              type="answer"
              label={nextButtonLabel}
              onPress={onPressNextButton}
            />
          </View>
        }
      />
      <Modal
        animationType="fade"
        visible={modalVisible}
        onRequestClose={onRequestClose}
        transparent>
        <Pressable style={styles.modal} onPress={onRequestClose}>
          <QuestionResult
            correctLabel={correctLabel}
            incorrectLabel={incorrectLabel}
            isCorrect={isCorrect}
          />
        </Pressable>
      </Modal>
    </View>
  );
};

AssessmentTemplate.propTypes = {
  title: string.isRequired,
  question: string.isRequired,
  difficulty: string.isRequired,
  answers: array.isRequired,
  onItemSelected: func.isRequired,
  displayNextButton: bool.isRequired,
  nextButtonLabel: string.isRequired,
  onPressNextButton: func.isRequired,
  modalVisible: bool,
  onRequestClose: func,
  correctLabel: string,
  incorrectLabel: string,
  isCorrect: bool,
};

AssessmentTemplate.defaultProps = {
  modalVisible: false,
  onRequestClose: () => console.log('Requested Modal to close'),
  correctLabel: '',
  incorrectLabel: '',
  isCorrect: false,
};

export default AssessmentTemplate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: Colors.background,
  },
  buttonContainer: {
    backgroundColor: Colors.background,
    paddingHorizontal: '15%',
    paddingVertical: '5%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  modal: {
    flex: 1,
    paddingHorizontal: '20%',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
