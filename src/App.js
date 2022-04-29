import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Home } from './screens/Home.screen';
import { Orders } from './screens/Orders.screen';
import {Profile} from './screens/Profile.screen';
import {theme} from './theme';
import {HomeIcon} from './components/Icons';
import CustomizeCoffee from './components/coffee/CustomizeCoffee';

const CoffeeStack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

const CoffeeStackScreen = () => {
  return (
    <CoffeeStack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <CoffeeStack.Screen 
        name="Dashboard"
        component={Home}
      />
      <CoffeeStack.Screen 
        name='CustomizeCoffee'        
        component={CustomizeCoffee}
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
          component={CoffeeStackScreen}
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
      </NavigationContainer>
    </Provider>
  );
};

export default App;
