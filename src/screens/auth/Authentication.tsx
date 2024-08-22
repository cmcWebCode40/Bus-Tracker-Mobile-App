import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Theme} from '@/libs/config';
import {pixelSizeHorizontal, pixelSizeVertical} from '@/libs/utils';
import {useThemedStyles} from '@/libs/hooks';
import {ScreenLayout} from '@/components/layout';

import OtpIcon from '../../../assets/icons/enter_otp.svg';
import {OtpInputField, Typography} from '@/components/common';
import {useUserLocationContext} from '@/libs/context';

export const AuthenticationScreen: React.FunctionComponent = () => {
  const style = useThemedStyles(styles);
  const {updateUser} = useUserLocationContext();

  const handleOtp = (_code: string) => {
    updateUser();
  };

  return (
    <ScreenLayout>
      <View style={style.imageContainer}>
        <OtpIcon />
      </View>
      <View style={style.content}>
        <Typography style={style.formTitle} variant="h2">
          Enter OTP
        </Typography>
        <Typography style={style.formSubText} variant="b2">
          Verification code was sent to the WhatsApp group
        </Typography>
        <OtpInputField otpCompleted={handleOtp} maximumLength={6} />
      </View>
    </ScreenLayout>
  );
};

const styles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      paddingHorizontal: pixelSizeHorizontal(20),
      backgroundColor: theme.colors.white[100],
      flex: 1,
    },
    content: {
      marginTop: pixelSizeVertical(56),
    },
    formTitle: {
      fontWeight: '700',
      marginBottom: pixelSizeVertical(8),
    },
    formSubText: {
      marginBottom: pixelSizeVertical(24),
      color: theme.colors.gray[100],
    },
    imageContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: pixelSizeVertical(56),
    },
  });
};
