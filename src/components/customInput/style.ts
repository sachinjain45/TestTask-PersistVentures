import {StyleSheet} from 'react-native';

import {ms} from '../../utils/deviceConfig';
import {colors, fontSizes, fontWeights} from '../../theme';

export const styles = StyleSheet.create({
  input: {
    color: colors.white,
    fontSize: fontSizes.lg,
    paddingVertical: ms(14),
    fontWeight: fontWeights.semiBold,
  },
});
