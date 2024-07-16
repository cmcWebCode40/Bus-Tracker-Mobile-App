/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, TextStyle, View} from 'react-native';
import {Typography} from '@/components/common';
import {useThemedStyles} from '@/libs/hooks';
import {heightPixel, pixelSizeVertical} from '@/libs/utils';
import {DetailsScreen, HomeScreen, NotificationsScreen} from '@/screens';
import {Theme, theme as themes} from '@/libs/config';

const Tab = createBottomTabNavigator();

type TabBarLabelProps = {
  focused: boolean;
};

export const Dashboard = () => {
  const {tabBarStyle, container} = useThemedStyles(styles);
  const tabLabelStyle = (focused: boolean): TextStyle => ({
    fontWeight: '500',
    fontSize: themes.fontSize.s,
    fontFamily: themes.fonts.ManropeSemibold,
    borderBottomWidth: 3,
    width: '75%',
    margin: 'auto',
    textAlign: 'center',
    marginBottom: 10,
    paddingVertical: pixelSizeVertical(4),
    borderBottomColor: focused
      ? themes.colors.blue[100]
      : themes.colors.white[100],
    color: focused ? themes.colors.blue[100] : themes.colors.gray[600],
  });

  return (
    <View style={container}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle,
        }}>
        {tabs.map(item => (
          <Tab.Screen
            key={item.name}
            name={item.name}
            options={{
              title: item.name,
              tabBarLabel: ({focused}: TabBarLabelProps) => (
                <Typography variant="b2" style={tabLabelStyle(focused)}>
                  {item.name}
                </Typography>
              ),
            }}
            component={item.component}
          />
        ))}
      </Tab.Navigator>
    </View>
  );
};

const tabs = [
  {
    name: 'Home',
    component: HomeScreen,
  },
  {
    name: 'Notifications',
    component: NotificationsScreen,
  },
  {
    name: 'Details',
    component: DetailsScreen,
  },
];

const styles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: pixelSizeVertical(20),
      backgroundColor: theme.colors.white[100],
    },
    tabBarStyle: {
      elevation: 0,
      borderTopWidth: 0,
      minHeight: heightPixel(65),
    },
    header: {
      paddingHorizontal: pixelSizeVertical(16),
    },
  });
};
