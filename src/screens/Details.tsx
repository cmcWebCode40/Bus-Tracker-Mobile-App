import {View, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {ScreenLayout} from '@/components/layout';
import {Header, Typography} from '@/components/common';
import {useThemedStyles} from '@/libs/hooks';
import {pixelSizeHorizontal, pixelSizeVertical} from '@/libs/utils';
import {Theme} from '@/libs/config';

export const DetailsScreen: React.FunctionComponent = () => {
  const style = useThemedStyles(styles);

  const details = [
    {
      suffixTitle: 'Date',
      suffixDescription: 'July 11, 2024',
      prefixTitle: 'Bus code',
      prefixDescription: 'YAB253',
    },
    {
      suffixTitle: 'Departure address',
      suffixDescription: 'Apple Junction, Lagos, Nigeria',
      prefixTitle: 'Departure time',
      prefixDescription: '05:50 AM',
    },
    {
      suffixTitle: 'Arrival address',
      suffixDescription: 'Interswitch, Lagos, Nigeria',
      prefixTitle: 'Arrival time',
      prefixDescription: '08:10 AM',
    },
    {
      suffixTitle: 'Vehicle type',
      suffixDescription: 'Toyota Coaster - Bus',
      prefixTitle: 'Plate number',
      prefixDescription: 'APP-868YD',
    },
  ];

  return (
    <ScreenLayout>
      <Header title="Details" />
      <View style={style.content}>
        <FlatList
          data={details}
          renderItem={({item}) => (
            <View style={style.card}>
              <View style={style.description}>
                <Typography style={style.title} variant="b1">
                  {item.suffixTitle}
                </Typography>
                <Typography variant="b2">{item.suffixDescription}</Typography>
              </View>
              <View>
                <Typography variant="b3"> {item.prefixTitle}</Typography>
                <Typography variant="b3"> {item.prefixDescription}</Typography>
              </View>
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
      paddingVertical: pixelSizeVertical(24),
      paddingHorizontal: pixelSizeHorizontal(16),
      backgroundColor: theme.colors.success[400],
      borderRadius: 20,
    },
    card: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: pixelSizeVertical(40),
      backgroundColor: theme.colors.success[400],
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
