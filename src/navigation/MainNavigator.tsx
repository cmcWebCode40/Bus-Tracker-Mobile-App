import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {MainStackScreens} from './type';
import {Dashboard} from './Dashboard';

const Stack = createNativeStackNavigator<MainStackScreens>();

export const MainNavigator: React.FunctionComponent = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};
