import React from 'react';
import { Profile } from "./Profile.screen";
import CustomSidebarMenu from "../components/CustomSideBarMenu";
import {createDrawerNavigator} from '@react-navigation/drawer'
import BottomNavigation from "./Bottom.navigator";

const Drawer = createDrawerNavigator();


const DrawerNavigation = (props) => {
    return (
      <Drawer.Navigator
        screenOptions={{headerShown: false}}
        drawerContent={CustomSidebarMenu}
      >
        <Drawer.Screen
          name="BottomNavigation"
          component={BottomNavigation}
        />
        <Drawer.Screen
          name="profileScreenStack"
          component={Profile}
        />
      </Drawer.Navigator>
    );
  };
   
  export default DrawerNavigation;