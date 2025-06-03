import {ms} from '../utils/deviceConfig';

export const fontSizes = {
  xs: ms(10),
  sm: ms(12),
  base: ms(14),
  md: ms(15),
  lg: ms(18),
  xl: ms(20),
  xxl: ms(24),
  xxxl: ms(28),
  huge: ms(30),
  massive: ms(32),
  gigantic: ms(35),
};

export const fontWeights = {
  regular: '400' as const,
  medium: '500' as const,
  semiBold: '600' as const,
  bold: '700' as const,
};
