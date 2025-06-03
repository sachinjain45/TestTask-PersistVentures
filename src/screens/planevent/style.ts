import {StyleSheet} from 'react-native';

import {ms} from '../../utils/deviceConfig';
import {colors} from '../../theme';
import {fontSizes, fontWeights} from '../../theme/typography';

export const styles = StyleSheet.create({
  scroll: {
    padding: ms(24),
    paddingBottom: ms(48),
    minHeight: '100%',
    alignItems: 'center',
  },
  header: {
    fontSize: fontSizes.xl,
    color: colors.white,
    fontWeight: fontWeights.semiBold,
    marginBottom: ms(8),
    alignSelf: 'flex-start',
  },
  subheader: {
    color: colors.gray,
    fontSize: fontSizes.base,
    marginBottom: ms(24),
    alignSelf: 'flex-start',
    maxWidth: ms(400),
  },
  section: {
    marginBottom: ms(24),
    width: '100%',
    maxWidth: ms(420),
  },
  sectionTitle: {
    color: colors.white,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.md,
    marginBottom: ms(8),
  },
  option: {
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: ms(8),
    padding: ms(12),
    marginBottom: ms(8),
    backgroundColor: colors.surfaceAlt,
    position: 'relative',
  },
  optionSelected: {
    borderColor: colors.white,
    backgroundColor: colors.optionSelected,
  },
  optionLabel: {
    color: colors.white,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.md,
    marginBottom: ms(2),
  },
  optionDesc: {
    color: colors.grayLighter,
    fontSize: fontSizes.sm,
  },
  dateSection: {
    marginBottom: ms(32),
    width: '100%',
    maxWidth: ms(420),
  },
  dateInput: {
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: ms(8),
    padding: ms(12),
    marginTop: ms(8),
    backgroundColor: colors.surfaceAlt,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateText: {
    color: colors.white,
    fontSize: fontSizes.md,
  },
  dateIconWrapper: {
    marginLeft: ms(12),
    padding: ms(4),
  },
  premiumTag: {
    position: 'absolute',
    right: ms(10),
    bottom: ms(-10),
    backgroundColor: colors.optionSelected,
    borderRadius: ms(6),
    paddingHorizontal: ms(8),
    paddingVertical: ms(2),
    borderWidth: 1,
    borderColor: colors.borderColor,
  },
  premiumTagText: {
    color: colors.gray,
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.semiBold,
    letterSpacing: 1,
  },
});
