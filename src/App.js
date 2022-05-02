import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';
import  Home from './screens/Home.screen';
import { Orders } from './screens/Orders.screen';
import {Profile} from './screens/Profile.screen';
import {theme} from './theme';
import {HomeIcon, OrdersIcon, ProfileIcon} from './components/Icons';
import CustomizeCoffee from './components/coffee/CustomizeCoffee';

const CoffeeStack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

const CoffeeStackScreen = () => {
  return (
    <CoffeeStack.Navigator>
      <CoffeeStack.Screen 
        name="Dashboard"
        component={Home}
        options={{title: 'Flavored Cafe'}}
      />
      <CoffeeStack.Screen 
        name='CustomizeCoffee'        
        component={CustomizeCoffee}
        options={{title: 'Customize Your Drink'}}
      />
    </CoffeeStack.Navigator>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabs.Navigator
          screenOptions={({route}) => ({
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: theme.colorGray,
          tabBarActiveTintColor: theme.colorBlack,
          tabBarInactiveTintColor: theme.colorAmber,
          tabBarIcon: ({size, color}) => {
            if (route.name === 'Home') {
              return <HomeIcon size={size} color={color} />;
            }
            if (route.name === 'Orders') {
              return <OrdersIcon size={size} color={color} />;
            }
            if (route.name === 'Profile') {
              return <ProfileIcon size={size} color={color} />;
            }
            return null;
          },
        })}>
        <BottomTabs.Screen
          name="Home"
          component={CoffeeStackScreen}
          options={{headerShown: false}}
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
      </NavigationContainer>
    </Provider>
  );
};

export default App;
