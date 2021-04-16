/**
 * @summary Handles persistency of Assessment data
 * @author Caio Reis <caio.oliveira.reis@gmail.com>
 *
 * Created at     : 2021-04-16 03:48:51
 * Last modified  : 2021-04-16 03:48:51
 */

import AsyncStorage from '@react-native-community/async-storage';
import {StorageKeys} from '_assets/constants';

export default class AssessmentPersistence {
  static async storeData(categoryId = 0, results = {}) {
    try {
      await AsyncStorage.setItem(
        StorageKeys.ASSESMENT.replace('{0}', categoryId),
        JSON.stringify(results),
      );
    } catch (error) {
      throw error;
    }
    return true;
  }

  static async retrieveData(categoryId = 0) {
    try {
      const value = await AsyncStorage.getItem(
        StorageKeys.ASSESMENT.replace('{0}', categoryId),
      );
      if (value !== null) {
        return JSON.parse(value);
      }
    } catch (error) {
      throw error;
    }
  }
}
