import Svg, {Path} from 'react-native-svg';

import {colors} from '../../theme';

export const RightArroewIcon = () => (
  <Svg
    width={22}
    height={22}
    viewBox="0 0 24 24"
    fill="none"
    style={{marginLeft: 8}}>
    <Path
      d="M5 12h14M13 6l6 6-6 6"
      stroke={colors.darkGray}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
