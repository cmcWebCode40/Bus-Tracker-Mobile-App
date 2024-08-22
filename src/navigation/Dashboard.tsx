/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform, StyleSheet, TextStyle} from 'react-native';
import {Typography} from '@/components/common';
import {useThemedStyles} from '@/libs/hooks';
import {pixelSizeHorizontal, pixelSizeVertical} from '@/libs/utils';
import {DetailsScreen, HomeScreen, NotificationsScreen} from '@/screens';
import {theme as themes} from '@/libs/config';
import {AccountDetailsIcon, HomeIcon} from '@/components/icons';

import NotificationActiveIcon from '../../assets/icons/notification_fill.svg';
import NotificationIcon from '../../assets/icons/notification.svg';

const Tab = createBottomTabNavigator();

type TabBarLabelProps = {
  focused: boolean;
};

export const Dashboard = () => {
  const {tabBarStyle} = useThemedStyles(styles);
  const tabLabelStyle = (focused: boolean): TextStyle => ({
    fontWeight: focused ? '600' : '400',
    fontSize: themes.fontSize.m,
    fontFamily: themes.fonts.AvertaSemibold,
    textAlign: 'center',
    borderBottomColor: focused
      ? themes.colors.primary[100]
      : themes.colors.white[100],
    color: focused ? themes.colors.primary[100] : themes.colors.gray[300],
  });

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle,
        tabBarItemStyle: {
          marginVertical: pixelSizeVertical(14),
        },
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
            tabBarIcon: item.icon,
          }}
          component={item.component}
        />
      ))}
    </Tab.Navigator>
  );
};

const tabs = [
  {
    name: 'Home',
    component: HomeScreen,
    icon: ({focused}: TabBarLabelProps) => (
      <HomeIcon color={focused ? themes.colors.primary[100] : undefined} />
    ),
  },
  {
    name: 'Notifications',
    component: NotificationsScreen,
    icon: ({focused}: TabBarLabelProps) =>
      focused ? <NotificationActiveIcon /> : <NotificationIcon />,
  },
  {
    name: 'Details',
    component: DetailsScreen,
    icon: ({focused}: TabBarLabelProps) => (
      <AccountDetailsIcon
        color={focused ? themes.colors.primary[100] : undefined}
      />
    ),
  },
];

const styles = () => {
  return StyleSheet.create({
    tabBarStyle: {
      borderTopWidth: 0,
      position: 'absolute',
      bottom: '5%',
      height: '9%',
      borderRadius: 56,
      marginHorizontal: pixelSizeHorizontal(24),
      ...Platform.select({
        ios: {
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowOffset: {width: 0, height: 20},
          shadowOpacity: 1,
          shadowRadius: 12.5,
        },
        android: {
          shadowColor: 'rgba(0, 0, 0, 0.6)',
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 1,
          shadowRadius: 5,
          elevation: 10, // For Android shadow
        },
      }),
    },
  });
};
