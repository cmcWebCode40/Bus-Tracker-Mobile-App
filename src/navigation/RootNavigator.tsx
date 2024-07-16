import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackScreens} from './type';
import {Dashboard} from './Dashboard';
import {DetailsScreen, NotificationsScreen} from '@/screens';

const Stack = createNativeStackNavigator<RootStackScreens>();

export const RootNavigator: React.FunctionComponent = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
    </Stack.Navigator>
  );
};
