import React from 'react';
import Svg, {Path} from 'react-native-svg';

import {colors} from '../../theme';

type CalendarIconProps = {
  width?: number;
  height?: number;
};

export const CalendarIcon = ({width = 22, height = 22}: CalendarIconProps) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      d="M7 2v2M17 2v2M3 7h18M5 5h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 4v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9"
      stroke={colors.white}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
