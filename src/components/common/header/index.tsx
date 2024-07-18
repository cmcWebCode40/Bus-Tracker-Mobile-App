import {
  View,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Typography} from '../typography';
import {heightPixel, pixelSizeVertical} from '@/libs/utils';
import {Theme} from '@/libs/config';
import {ArrowBackIcon} from '@/components/icons';
import {useThemedStyles} from '@/libs/hooks';

interface HeaderProps {
  backIcon?: React.ReactNode;
  title?: string;
  onGoBack?: () => void;
  style?: StyleProp<ViewStyle>;
  shouldGoBack?: boolean;
}

export const Header: React.FunctionComponent<HeaderProps> = ({
  onGoBack,
  backIcon,
  title,
  shouldGoBack = true,
  style: customStyles,
}) => {
  const style = useThemedStyles(styles);

  let backButton;

  if (backIcon) {
    backButton = backIcon;
  } else {
    backButton = <ArrowBackIcon />;
  }

  return (
    <View style={[style.container, customStyles]}>
      {shouldGoBack ? (
        <TouchableOpacity role="button" activeOpacity={0.7} onPress={onGoBack}>
          {backButton}
        </TouchableOpacity>
      ) : (
        <View />
      )}

      <Typography variant="h2" style={style.title}>
        {title}
      </Typography>
      <View />
    </View>
  );
};

const styles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: pixelSizeVertical(16),
      backgroundColor: theme.colors.white[100],
    },
    title: {
      fontWeight: '700',
      color: theme.colors.gray[200],
      fontFamily: theme.fonts.AvertaSemibold,
      lineHeight: heightPixel(32),
    },
  });
};
