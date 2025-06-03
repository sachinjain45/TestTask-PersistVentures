import {StyleSheet} from 'react-native';

import {ms} from '../../utils/deviceConfig';
import {colors, fontSizes, fontWeights} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: ms(24),
    justifyContent: 'flex-start',
  },
  header: {
    fontSize: fontSizes.huge,
    color: colors.white,
    fontFamily: 'serif',
    fontWeight: fontWeights.semiBold,
    marginBottom: ms(8),
  },
  subheader: {
    color: colors.gray,
    fontSize: fontSizes.md,
    marginBottom: ms(32),
    maxWidth: ms(400),
  },
  label: {
    color: colors.white,
    fontFamily: 'serif',
    fontSize: fontSizes.xl,
    fontWeight: fontWeights.semiBold,
    marginTop: ms(24),
    marginBottom: ms(8),
  },
  inputWrapper: {
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: ms(12),
    marginBottom: ms(8),
    backgroundColor: colors.surfaceAlt,
  },
  input: {
    color: colors.white,
    fontSize: fontSizes.lg,
    padding: ms(14),
    fontWeight: fontWeights.regular,
  },
  linkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: ms(12),
    backgroundColor: colors.surfaceAlt,
    marginBottom: ms(8),
  },
  linkPrefix: {
    paddingLeft: ms(14),
    justifyContent: 'center',
  },
  linkPrefixText: {
    color: colors.grayMedium,
    fontSize: fontSizes.lg,
  },
  linkSeparator: {
    width: ms(1),
    height: ms(48),
    backgroundColor: colors.grayDarker,
    marginHorizontal: ms(8),
  },
  linkInput: {
    flex: 1,
    paddingLeft: 0,
  },
  linkHint: {
    color: colors.grayMedium,
    fontSize: fontSizes.sm,
    marginBottom: ms(8),
  },
  linkUrl: {
    color: colors.grayLighter,
    fontFamily: 'monospace',
  },
  hostHint: {
    color: colors.grayMedium,
    fontSize: fontSizes.sm,
    marginBottom: ms(8),
    marginTop: ms(2),
  },
  hostHintItalic: {
    fontStyle: 'italic',
    color: colors.grayLighter,
  },
  validationError: {
    color: colors.error,
    fontSize: fontSizes.sm,
    marginBottom: ms(4),
    marginLeft: ms(2),
  },
});
