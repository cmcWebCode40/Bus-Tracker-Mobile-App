import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {Header, Typography} from '@/components/common';
import {Theme} from '@/libs/config';
import {useThemedStyles} from '@/libs/hooks';
import {ScreenLayout} from '@/components/layout';
import {pixelSizeVertical} from '@/libs/utils';

export const NotificationsScreen: React.FunctionComponent = () => {
  const style = useThemedStyles(styles);
  return (
    <ScreenLayout>
      <Header title="Notifications" />
      <View style={style.content}>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={({}) => (
            <View style={style.card}>
              <View style={style.description}>
                <Typography style={style.title} variant="b1">
                  Bus Stop Alert!
                </Typography>
                <Typography variant="b2">
                  YAB234 just arrived Greenfield Estate.
                </Typography>
              </View>
              <Typography variant="b3">Now</Typography>
            </View>
          )}
        />
      </View>
    </ScreenLayout>
  );
};

const styles = (theme: Theme) => {
  return StyleSheet.create({
    content: {
      marginTop: pixelSizeVertical(56),
    },
    card: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      paddingVertical: pixelSizeVertical(16),
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.gray[800],
    },
    description: {
      flexBasis: '75%',
    },
    title: {
      color: theme.colors.gray[200],
      fontWeight: '600',
      fontFamily: theme.fonts.AvertaSemibold,
      marginBottom: pixelSizeVertical(4),
    },
  });
};
