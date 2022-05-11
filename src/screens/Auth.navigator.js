import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./Login.screen";
import SignUp from "./SignUp.screen";
import { theme } from "../theme";

const Stack = createStackNavigator();

const Auth = () => {
    // Stack Navigator for Login and Sign up Screen
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={Login}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="RegisterScreen"
          component={SignUp}
          options={{
            title: 'Register', //Set Header Title
            headerStyle: {
              backgroundColor: theme.colorAmber, //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
    );
  };

  export default Auth;