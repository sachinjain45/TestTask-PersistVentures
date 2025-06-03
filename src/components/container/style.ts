import {StyleSheet} from 'react-native';

import {ms} from '../../utils/deviceConfig';
import {colors, fontSizes, fontWeights} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.black,
    paddingTop: ms(50),
    paddingBottom: ms(16),
  },
  step: {
    width: ms(48),
    height: ms(6),
    borderRadius: ms(3),
    marginHorizontal: ms(4),
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: ms(16),
    paddingHorizontal: ms(48),
    backgroundColor: colors.black,
  },
  nextButton: {
    backgroundColor: colors.infoLight,
    borderRadius: ms(12),
    paddingVertical: ms(12),
    paddingHorizontal: ms(32),
  },
  nextButtonDisabled: {
    backgroundColor: colors.grayExtraLight,
  },
  nextButtonText: {
    color: colors.grayDark,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.md,
    letterSpacing: 1,
  },
  nextButtonTextDisabled: {
    color: colors.grayLighter,
  },
});
