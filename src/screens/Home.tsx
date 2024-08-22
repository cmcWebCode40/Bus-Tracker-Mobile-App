import {StyleSheet} from 'react-native';
import React from 'react';
import {ScreenLayout} from '@/components/layout';
import {useThemedStyles} from '@/libs/hooks';
import {useUserLocationContext} from '@/libs/context';
import {BusTrackerControl, BusTrackingView} from '@/features/bus-tracking';
import LeafletView from '@/leaflet-view';

export const HomeScreen: React.FunctionComponent = () => {
  const style = useThemedStyles(styles);
  const {currentLocation} = useUserLocationContext();

  const coordinates = currentLocation.location;

  const latitude = coordinates?.length > 0 ? coordinates[0] : 0;
  const longitude = coordinates?.length > 0 ? coordinates[1] : 0;

  console.log('============coordinates========================');
  console.log(longitude, latitude);
  console.log('====================================');

  return (
    <ScreenLayout style={style.wrapper}>
      <BusTrackingView />
      <LeafletView
        zoom={17}
        mapMarkers={[
          {
            id: '1',
            position: {lat: latitude, lng: longitude},
            size: [50, 50],
            icon: 'https://cdn-icons-png.flaticon.com/512/744/744466.png',
          },
        ]}
        mapCenterPosition={{
          lat: latitude,
          lng: longitude,
          // zoom: 14,
        }}
        doDebug={false}
      />
      <BusTrackerControl />
    </ScreenLayout>
  );
};

const styles = () => {
  return StyleSheet.create({
    wrapper: {
      paddingHorizontal: 0,
      paddingVertical: 0,
    },
    container: {
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
  });
};
