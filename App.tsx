import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RootNavigator} from './src/navigation';
import {UserLocationProvider} from '@/libs/context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <UserLocationProvider>
        <NavigationContainer>
          <StatusBar barStyle={'default'} />
          <RootNavigator />
        </NavigationContainer>
      </UserLocationProvider>
    </SafeAreaProvider>
  );
}

export default App;
