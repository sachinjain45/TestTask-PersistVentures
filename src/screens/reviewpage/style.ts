import {StyleSheet} from 'react-native';

import {ms} from '../../utils/deviceConfig';
import {colors, fontSizes, fontWeights} from '../../theme';

export const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    backgroundColor: colors.background,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: ms(32),
  },
  container: {
    width: '100%',
    maxWidth: ms(420),
    padding: ms(24),
    backgroundColor: colors.background,
    flex: 1,
  },
  eventTitle: {
    fontSize: fontSizes.massive,
    color: colors.grayExtraLight,
    fontFamily: 'serif',
    fontWeight: fontWeights.semiBold,
    marginBottom: ms(2),
  },
  eventLink: {
    color: colors.grayMedium,
    fontSize: fontSizes.lg,
    marginBottom: ms(18),
  },
  eventLinkBold: {
    color: colors.grayExtraLight,
    fontWeight: fontWeights.bold,
  },
  summarySection: {
    marginBottom: ms(18),
  },
  summaryLabel: {
    color: colors.grayMedium,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.md,
    marginBottom: ms(2),
    letterSpacing: 1,
  },
  summaryItem: {
    color: colors.grayLightMedium,
    fontSize: fontSizes.md,
    marginBottom: ms(2),
  },
  summaryBold: {
    color: colors.grayExtraLight,
    fontWeight: fontWeights.bold,
  },
  summaryAccent: {
    color: colors.grayExtraLight,
    fontWeight: fontWeights.bold,
    fontStyle: 'italic',
  },
  summaryUnderline: {
    color: colors.grayLightMedium,
    textDecorationLine: 'underline',
  },
  whatsNextSection: {
    marginBottom: ms(24),
  },
  whatsNextLabel: {
    color: colors.grayMedium,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.md,
    marginBottom: ms(2),
    letterSpacing: 1,
  },
  whatsNextItem: {
    color: colors.grayMedium,
    fontSize: fontSizes.md,
    marginBottom: ms(2),
  },
  formRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: ms(8),
  },
  formCol: {
    flex: 1,
    marginRight: ms(8),
  },
  inputLabel: {
    color: colors.grayExtraLight,
    fontSize: fontSizes.md,
    marginBottom: ms(4),
    marginTop: ms(8),
  },
  input: {
    backgroundColor: colors.surfaceAlt,
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: ms(12),
    color: colors.white,
    fontSize: fontSizes.lg,
    padding: ms(14),
    marginBottom: ms(8),
  },
  continueButton: {
    backgroundColor: colors.optionSelected,
    borderRadius: ms(12),
    paddingVertical: ms(16),
    alignItems: 'center',
    marginTop: ms(16),
    marginBottom: ms(16),
  },
  continueButtonEnabled: {
    opacity: 1,
    backgroundColor: colors.grayMedium,
  },
  continueButtonDisabled: {
    opacity: 0.5,
    backgroundColor: colors.optionSelected,
  },
  continueButtonText: {
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.lg,
    letterSpacing: 1,
  },
  continueButtonTextEnabled: {
    color: colors.white,
  },
  continueButtonTextDisabled: {
    color: colors.grayMedium,
  },
  priceSummary: {
    marginTop: ms(8),
    marginBottom: ms(8),
    paddingTop: ms(8),
    borderTopWidth: 1,
    borderTopColor: colors.grayDark,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: ms(2),
  },
  priceLabel: {
    color: colors.grayLighter,
    fontSize: fontSizes.md,
  },
  priceValue: {
    color: colors.grayLighter,
    fontSize: fontSizes.md,
  },
  priceLabelTotal: {
    color: colors.grayExtraLight,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.lg,
    marginTop: ms(8),
  },
  priceValueTotal: {
    color: colors.grayExtraLight,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.xl,
    marginTop: ms(8),
  },
  backLink: {
    marginTop: ms(12),
    alignSelf: 'flex-start',
  },
  backText: {
    color: colors.grayLighter,
    textDecorationLine: 'underline',
    fontSize: fontSizes.md,
  },
});
