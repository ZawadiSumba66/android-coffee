import React from 'react';
import Home from './Home.screen';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Orders } from './Orders.screen';
import Profile  from './Profile.screen';
import { font, theme } from '../theme';
import {HomeIcon, OrdersIcon, ProfileIcon} from '../components/Icons';
import NavigationDrawerHeader from '../components/NavigationDrawerHeader';
import CustomizeCoffee from '../components/coffee/CustomizeCoffee';

const CoffeeStack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();


const CoffeeStackScreen = () => {
    return (
      <CoffeeStack.Navigator>
        <CoffeeStack.Screen 
          name="Dashboard"
          component={Home}
          options={{headerShown: false}}
        />
        <CoffeeStack.Screen 
          name='CustomizeCoffee'        
          component={CustomizeCoffee}
          options={{title: 'Customize Your Drink'}}
        />
      </CoffeeStack.Navigator>
    )
  }
  

const BottomNavigation = ({navigation}) => {
    return (
          <BottomTabs.Navigator
            screenOptions={({route}) => ({
            // tabBarShowLabel: false,
            headerLeft: () => (
              <NavigationDrawerHeader navigationProps={navigation} />
            ),
            tabBarActiveTintColor: theme.colorBlack,
            tabBarInactiveTintColor: theme.colorAmber,
            tabBarIcon: ({size, color}) => {
              if (route.name === 'Home') {
                return <HomeIcon size={size} color={color} />;
              }
              if (route.name === 'Orders') {
                return <OrdersIcon size={size} color={color} />;
              }
              return null;
            },
          })}>
          <BottomTabs.Screen
            name="Home"
            component={CoffeeStackScreen}
            // options={{title: "Dashboard"}}
          />
          <BottomTabs.Screen
            name="Orders"
            component={Orders}
            options={{title: 'My Orders'}}
          />
        </BottomTabs.Navigator>
    );
  };

  export default BottomNavigation;