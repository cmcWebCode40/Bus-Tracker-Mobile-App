import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {Typography} from '@/components/common';
import {useThemedStyles} from '@/libs/hooks';
import {Theme} from '@/libs/config';
import {
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '@/libs/utils';
import PolygonImage from '../../../assets/images/polygon.png';

export const BusTrackerPanel: React.FunctionComponent = () => {
  const style = useThemedStyles(styles);
  return (
    <View style={style.container}>
      <Image source={PolygonImage} style={style.image} />
      <View style={style.content}>
        <View style={style.contentItem}>
          <Typography variant="b3">Stops left</Typography>
          <Typography style={style.titleBold}>4</Typography>
        </View>
        <View style={style.contentItem}>
          <Typography variant="b3">Time remaining</Typography>
          <Typography style={style.titleBold}>
            1<Typography style={style.titleLight}>hr</Typography> 20
            <Typography style={style.titleLight}>min</Typography>
          </Typography>
        </View>
        <View style={(style.contentItem, style.speedLevel)}>
          <Typography style={style.titleBold}>55</Typography>
          <Typography style={style.speedText} variant="b3">
            {/* km/h */}
          </Typography>
        </View>
      </View>
    </View>
  );
};

const styles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      width: '100%',
      marginTop: pixelSizeVertical(32),
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      flexDirection: 'row',
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: pixelSizeVertical(16),
      paddingHorizontal: pixelSizeHorizontal(10),
      backgroundColor: theme.colors.black[200],
      width: '100%',
    },
    contentItem: {
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: pixelSizeHorizontal(32),
    },
    titleBold: {
      color: theme.colors.white[100],
      fontWeight: '700',
      marginTop: pixelSizeVertical(2),
    },
    titleLight: {
      color: theme.colors.white[100],
      fontWeight: '400',
    },
    speedLevel: {
      borderColor: theme.colors.orange[100],
      //   borderWidth: 4,
      borderRadius: theme.radius.full,
      //   paddingVertical: pixelSizeVertical(16),
      //   paddingHorizontal: pixelSizeHorizontal(18),
      marginRight: pixelSizeHorizontal(8),
    },
    speedText: {
      position: 'absolute',
      bottom: '-40%',
      left: '80%',
      width: '100%',
    },
    image: {
      height: heightPixel(20),
      width: widthPixel(25),
      left: '-0.5%',
    },
  });
};
