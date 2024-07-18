import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackScreens} from './type';
import {AuthenticationScreen} from '@/screens';

const Stack = createNativeStackNavigator<RootStackScreens>();

export const AuthNavigator: React.FunctionComponent = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Auth" component={AuthenticationScreen} />
    </Stack.Navigator>
  );
};
