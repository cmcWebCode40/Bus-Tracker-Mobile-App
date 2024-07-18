import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScreenLayout} from '@/components/layout';
import {useThemedStyles} from '@/libs/hooks';
import {Theme} from '@/libs/config';
import MapView, {
  Callout,
  Marker,
  PROVIDER_GOOGLE,
  Polyline,
} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {BusIcon} from '@/components/icons';
import MapViewDirections from 'react-native-maps-directions';

const origin = {
  latitude: 6.42988,
  longitude: 3.42324,
};
const destination = {
  latitude: 6.467391,
  longitude: 3.59659,
};

export const HomeScreen: React.FunctionComponent = () => {
  const style = useThemedStyles(styles);
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 6.42988,
    longitude: 3.42324,
  });
  const [destinationLocation, setDestinationLocation] = useState({
    latitude: 6.467391,
    longitude: 3.59659,
  });

  useEffect(() => {
    // Geolocation.getCurrentPosition(
    //   position => {
    //     setCurrentLocation({
    //       latitude: position.coords.latitude,
    //       longitude: position.coords.longitude,
    //     });
    //   },
    //   error => console.error(error),
    //   {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    // );
  }, []);

  if (!currentLocation) {
    return null; // or some loading indicator
  }

  const coordinates = [
    {latitude: currentLocation.latitude, longitude: currentLocation.longitude},
    {
      latitude: destinationLocation.latitude,
      longitude: destinationLocation.longitude,
    },
  ];
  return (
    <ScreenLayout>
      <View style={style.container}>
        <MapView
          style={style.map}
          initialRegion={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
          showsTraffic={true}>
          <Marker coordinate={currentLocation}>
            <BusIcon />
            <Callout>
              <View>
                <Text>Estimated Arrival: 10 mins</Text>
              </View>
            </Callout>
          </Marker>
          <Marker coordinate={destinationLocation} />
          {/* <Polyline
            coordinates={coordinates}
            strokeColor="#3EC3FF"
            strokeWidth={6}
          /> */}
          <MapViewDirections
            origin={origin}
            strokeColor="#0275D8"
            strokeWidth={5}
            destination={destination}
            apikey={''}
          />
        </MapView>
      </View>
    </ScreenLayout>
  );
};

const styles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      height: '100%',
      width: '100%',
      ...StyleSheet.absoluteFillObject,
    },
  });
};
