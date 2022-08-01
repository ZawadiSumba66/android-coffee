import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './redux/store';
import SplashScreen from './screens/Splash.screen';
import Auth from './screens/Auth.navigator';
import DrawerNavigation from './screens/Drawer.navigator';
import { UserProvider } from './context/user/user.context';

const Stack = createStackNavigator();

const App = () => {
  return (
    <UserProvider>
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        {/* Navigation Drawer as a landing page */}
        <Stack.Screen
          name="DrawerNavigation"
          component={DrawerNavigation}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    </UserProvider>
  );
};

export default App;
