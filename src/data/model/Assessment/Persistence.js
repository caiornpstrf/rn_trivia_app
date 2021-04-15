import AsyncStorage from '@react-native-community/async-storage';
import {StorageKeys} from '_assets/constants';

export default class AssessmentPersistence {
  static async storeData(category = '', results = {}) {
    try {
      await AsyncStorage.setItem(
        StorageKeys.ASSESMENT.replace('{0}', category),
        JSON.stringify(results),
      );
    } catch (error) {
      throw error;
    }
    return true;
  }

  static async retrieveData(category = '') {
    try {
      const value = await AsyncStorage.getItem(
        StorageKeys.ASSESMENT.replace('{0}', category),
      );
      if (value !== null) {
        return JSON.parse(value);
      }
    } catch (error) {
      throw error;
    }
  }
}
