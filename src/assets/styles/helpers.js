/**
 * @summary Styles helper functions
 * @author Caio Reis <caio.oliveira.reis@gmail.com>
 *
 * Created at     : 2021-04-11 19:56:51
 * Last modified  : 2021-04-11 20:12:17
 */

import {Dimensions, Platform, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH /* height: SCREEN_HEIGHT */} = Dimensions.get(
  'window',
);

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

/**
 * Normalizes fontSize based on pixelRatio
 *
 * @param {number} size
 * @returns normalized fontSize
 */
const normalize = (size = 12) => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

export default {
  normalize,
};
