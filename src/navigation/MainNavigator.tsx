import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {MainStackScreens} from './type';
import {Dashboard} from './Dashboard';
import {DetailsScreen, NotificationsScreen} from '@/screens';

const Stack = createNativeStackNavigator<MainStackScreens>();

export const MainNavigator: React.FunctionComponent = () => {
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
