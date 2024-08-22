/* eslint-disable react-hooks/exhaustive-deps */
import {Theme} from '@/libs/config';
import {useThemedStyles} from '@/libs/hooks';
import {pixelSizeHorizontal} from '@/libs/utils';
import React, {useEffect, useRef, useState} from 'react';
import {Pressable, StyleSheet, TextInput, View} from 'react-native';

type OtpInputFieldProps = {
  maximumLength: number;
  disabled?: boolean;
  hasError?: boolean;
  otpCompleted: (code: string) => void;
};
export const OtpInputField: React.FunctionComponent<OtpInputFieldProps> = ({
  disabled,
  hasError,
  maximumLength,
  otpCompleted,
}) => {
  const style = useThemedStyles(styles);
  const otpList = new Array(maximumLength).fill(0);
  const inputRef = useRef<TextInput | null>(null);
  const [otpCode, setOTPCode] = useState('');
  const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);

  const handleOnPress = () => {
    setIsInputBoxFocused(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleOnBlur = () => {
    setIsInputBoxFocused(false);
  };

  useEffect(() => {
    if (otpCode.length === maximumLength) {
      otpCompleted(otpCode);
    }
  }, [otpCode, maximumLength]);

  const otpDigitView = (_arrayItem: number, index: number) => {
    const isCurrentValue = index === otpCode.length;
    const isLastValue = index === maximumLength - 1;
    const isCodeComplete = otpCode.length === maximumLength;

    const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);

    const _isFocused = isInputBoxFocused && isValueFocused;
    const hasValue = otpCode[index];

    return (
      <View
        style={[
          style.boxInput,
          hasError
            ? style.focusedErrorBoxInput
            : hasValue
            ? style.focusedBoxInput
            : _isFocused && style.focusedBoxInput,
          disabled && style.disabled,
        ]}
        key={index}>
        {otpCode[index] ? <View style={style.digit} /> : null}
      </View>
    );
  };

  return (
    <View>
      <Pressable style={style.content} onPress={handleOnPress}>
        {otpList.map(otpDigitView)}
      </Pressable>
      <TextInput
        value={otpCode}
        style={style.textInput}
        editable={!disabled}
        keyboardType="number-pad"
        onChangeText={setOTPCode}
        maxLength={maximumLength}
        ref={inputRef}
        onBlur={handleOnBlur}
      />
    </View>
  );
};

const styles = (theme: Theme) => {
  return StyleSheet.create({
    focusedBoxInput: {
      borderColor: theme.colors.success[100],
    },
    focusedErrorBoxInput: {
      borderColor: theme.colors.red[700],
    },
    content: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    textInput: {
      opacity: 0,
      borderRadius: 20,
      padding: 0,
      position: 'absolute',
      backgroundColor: theme.colors.white[100],
    },
    boxInput: {
      borderColor: 'transparent',
      borderWidth: 1,
      borderRadius: theme.radius.rounded,
      height: 56,
      width: 47,
      marginHorizontal: pixelSizeHorizontal(16),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.gray[400],
    },
    boxText: {
      fontSize: 26,
      fontWeight: '700',
    },
    boxTextFocused: {
      color: theme.colors.success[100],
    },
    boxContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    digit: {
      height: 8,
      width: 8,
      borderRadius: theme.radius.full,
      backgroundColor: theme.colors.black[100],
    },
    disabled: {
      opacity: 0.4,
    },
  });
};
