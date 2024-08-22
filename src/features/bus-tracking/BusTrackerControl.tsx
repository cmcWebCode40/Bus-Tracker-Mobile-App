import {View, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Typography} from '@/components/common';
import {Theme} from '@/libs/config';
import {
  ScreenHeight,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '@/libs/utils';
import {useThemedStyles} from '@/libs/hooks';
import {LocationLightIcon} from '@/components/icons/LocationLight';

export const BusTrackerControl: React.FunctionComponent = () => {
  const style = useThemedStyles(styles);
  const isTracking = true;

  return (
    <View style={style.content}>
      {isTracking ? (
        <TouchableOpacity
          activeOpacity={0.8}
          style={[style.button, style.buttonDanger, style.buttonRight]}>
          <Typography
            variant="b2"
            style={[style.buttonText, style.buttonDangerText]}>
            Stop Tracking
          </Typography>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          activeOpacity={0.8}
          style={[style.button, style.buttonPrimary, style.buttonRight]}>
          <LocationLightIcon />
          <Typography
            variant="b2"
            style={[style.buttonText, style.buttonPrimaryText, style.space]}>
            Track Bus
          </Typography>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          style.button,
          style.buttonPrimary,
          style.buttonRound,
          style.buttonLeft,
        ]}>
        <Typography
          variant="b2"
          style={[style.buttonText, style.buttonPrimaryText]}>
          Bus Routes
        </Typography>
      </TouchableOpacity>
    </View>
  );
};

console.log(ScreenHeight / 3);

const styles = (theme: Theme) => {
  return StyleSheet.create({
    content: {
      zIndex: 9999,
    },
    button: {
      paddingVertical: pixelSizeVertical(10),
      paddingHorizontal: pixelSizeHorizontal(16),
      borderRadius: 17,
      borderWidth: 1,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    buttonPrimary: {
      borderColor: theme.colors.primary[100],
      backgroundColor: theme.colors.primary[400],
    },
    buttonDanger: {
      borderColor: theme.colors.red[700],
      backgroundColor: theme.colors.red[400],
    },
    buttonPrimaryText: {
      color: theme.colors.primary[100],
    },
    buttonDangerText: {
      color: theme.colors.red[700],
    },
    buttonText: {
      fontWeight: '600',
      fontFamily: theme.fonts.AvertaSemibold,
      lineHeight: heightPixel(20),
      textAlign: 'center',
    },
    buttonRound: {
      height: 100,
      width: 100,
      borderRadius: theme.radius.full,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonRight: {
      right: '-15%',
      width: '40%',
      bottom: -(ScreenHeight / 1.3),
    },
    buttonLeft: {
      left: ScreenHeight / 3,
      bottom: -(ScreenHeight / 1.5),
    },
    space: {
      marginLeft: 8,
    },
  });
};
