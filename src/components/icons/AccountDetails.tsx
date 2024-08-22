import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {SvgIconProps} from './type';

export const AccountDetailsIcon: React.FunctionComponent<SvgIconProps> = ({
  color = '#9CA3AF',
}) => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
      <Path
        d="M11.5 9C11.5 10.66 10.16 12 8.5 12C6.84 12 5.5 10.66 5.5 9C5.5 7.34 6.84 6 8.5 6C10.16 6 11.5 7.34 11.5 9ZM14.5 20H2.5V18C2.5 15.79 5.19 14 8.5 14C11.81 14 14.5 15.79 14.5 18M22.5 12V14H13.5V12M22.5 8V10H13.5V8M22.5 4V6H13.5V4H22.5Z"
        fill={color}
      />
    </Svg>
  );
};
