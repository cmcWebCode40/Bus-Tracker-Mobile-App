import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackScreens} from './type';
import {MainNavigator} from './MainNavigator';
import {AuthNavigator} from './AuthNavigator';
import {useUserLocationContext} from '@/libs/context';

const Stack = createNativeStackNavigator<RootStackScreens>();

export const RootNavigator: React.FunctionComponent = () => {
  const {isAuthenticated} = useUserLocationContext();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {isAuthenticated ? (
        <Stack.Screen name="Main" component={MainNavigator} />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};
