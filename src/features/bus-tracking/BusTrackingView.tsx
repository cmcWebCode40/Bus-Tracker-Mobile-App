import {StyleSheet, View} from 'react-native';
import React from 'react';
import {BusTrackerPanel} from './BusTrackerPanel';
import {useThemedStyles} from '@/libs/hooks';
import {pixelSizeHorizontal} from '@/libs/utils';

export const BusTrackingView: React.FunctionComponent = () => {
  const style = useThemedStyles(styles);
  return (
    <View style={style.container}>
      <BusTrackerPanel />
    </View>
  );
};

const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      zIndex: 9999,
      position: 'absolute',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: pixelSizeHorizontal(24),
    },
  });
};
