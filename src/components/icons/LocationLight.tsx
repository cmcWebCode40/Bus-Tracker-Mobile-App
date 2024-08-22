import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {SvgIconProps} from './type';

export const LocationLightIcon: React.FunctionComponent<SvgIconProps> = ({
  color = '#0275D8',
  size = '20',
}) => {
  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <Path
        d="M4.37665 8.31263L14.0933 3.68597C15.51 3.01097 16.9883 4.49013 16.3142 5.90763L11.6875 15.6235C11.055 16.951 9.13832 16.8693 8.62165 15.4918L7.76665 13.2093C7.68311 12.9866 7.55288 12.7844 7.38471 12.6162C7.21654 12.4481 7.01433 12.3178 6.79165 12.2343L4.50832 11.3785C3.13165 10.8618 3.04915 8.94513 4.37665 8.31263Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
