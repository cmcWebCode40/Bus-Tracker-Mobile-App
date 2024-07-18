import {View, StyleSheet, ViewStyle} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useThemedStyles} from '@/libs/hooks';
import {pixelSizeHorizontal, pixelSizeVertical} from '@/libs/utils';
import {Theme} from '@/libs/config';

interface ScreenLayoutProps {
  style?: ViewStyle;
  children: React.ReactNode;
}

export const ScreenLayout: React.FunctionComponent<ScreenLayoutProps> = ({
  style,
  children,
}) => {
  const insets = useSafeAreaInsets();
  const mainStyle = useThemedStyles(styles);

  return (
    <View
      style={[
        mainStyle.container,
        {
          paddingTop: insets.top,
        },
        style,
      ]}>
      {children}
    </View>
  );
};

const styles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      paddingHorizontal: pixelSizeHorizontal(20),
      backgroundColor: theme.colors.white[100],
      flex: 1,
      paddingVertical: pixelSizeVertical(24),
    },
  });
};
