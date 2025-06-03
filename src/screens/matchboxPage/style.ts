import {StyleSheet} from 'react-native';

import {ms} from '../../utils/deviceConfig';
import {colors, fontSizes, fontWeights} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: ms(24),
  },
  logo: {
    fontSize: fontSizes.xxxl,
    fontWeight: fontWeights.bold,
    letterSpacing: 2,
    color: colors.grayDark,
    marginBottom: ms(24),
  },
  title: {
    fontSize: fontSizes.massive,
    color: colors.white,
    fontWeight: fontWeights.semiBold,
    textAlign: 'center',
    marginBottom: ms(12),
  },
  subtitle: {
     fontSize: fontSizes.lg,
    color: colors.grayLighter,
    textAlign: 'center',
    marginBottom: ms(32),
  },
  getStartedButton: {
    backgroundColor: colors.surface2,
    borderRadius: ms(16),
    paddingVertical: ms(14),
    paddingHorizontal: ms(32),
    marginBottom: ms(16),
  },
  getStartedButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  getStartedText: {
    color: colors.grayDark,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.lg,
    letterSpacing: 1,
  },
  contactButton: {
    backgroundColor: colors.secondary,
    borderRadius: ms(8),
    paddingVertical: ms(12),
    paddingHorizontal: ms(32),
  },
  contactText: {
    color: colors.surface,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.md,
    letterSpacing: 1,
  },
});
