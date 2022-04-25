import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { Home } from './Home.screen';
import { Orders } from './Orders.screen';
import {Profile} from './Profile.screen';
import {theme} from '../theme';
import {HomeIcon} from '../components/Icons';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colorBlack,
        tabBarInactiveTintColor: theme.colorAmber,
        tabBarIcon: ({size, color}) => {
          if (route.name === 'Home') {
            return <HomeIcon size={size} color={color} />;
          }
          if (route.name === 'Orders') {
            return <Text>Orders</Text>;
          }
          if (route.name === 'Profile') {
            return <Text>Profile</Text>;
          }
          return null;
        },
      })}>
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{title: 'Dashboard'}}
      />
      <BottomTabs.Screen
        name="Orders"
        component={Orders}
        options={{title: 'My Orders'}}
      />
      <BottomTabs.Screen
        name="Profile"
        component={Profile}
        options={{title: 'Your Profile'}}
      />
    </BottomTabs.Navigator>
  );
};
