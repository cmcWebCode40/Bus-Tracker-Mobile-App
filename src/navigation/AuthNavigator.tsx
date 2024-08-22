import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AuthStackScreens} from './type';
import {AuthenticationScreen} from '@/screens';

const Stack = createNativeStackNavigator<AuthStackScreens>();

export const AuthNavigator: React.FunctionComponent = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Authentication" component={AuthenticationScreen} />
    </Stack.Navigator>
  );
};
