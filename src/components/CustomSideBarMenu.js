import React from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';
 
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { theme } from '../theme';
 
const CustomSidebarMenu = (props) => {
  return (
    <View style={stylesSidebar.sideMenuContainer}>
    <View style={stylesSidebar.profileHeader}>
      <View style={stylesSidebar.profileHeaderPicCircle}>
        <Text style={{fontSize: 25, color: '#307ecc'}}>
          {'About React'.charAt(0)}
        </Text>
      </View>
      <Text style={stylesSidebar.profileHeaderText}>
        AboutReact
      </Text>
    </View>
    <View style={stylesSidebar.profileHeaderLine} />

    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label={({color}) => 
          <Text style={{color: '#d8d8d8'}}>
            Logout
          </Text>
        }
        onPress={() => {
          props.navigation.toggleDrawer();
          Alert.alert(
            'Logout',
            'Are you sure? You want to logout?',
            [
              {
                text: 'Cancel',
                onPress: () => {
                  return null;
                },
              },
              {
                text: 'Confirm',
                onPress: () => {
                  AsyncStorage.clear();
                  props.navigation.replace('Auth');
                },
              },
            ],
            {cancelable: false},
          );
        }}
      />
    </DrawerContentScrollView>
  </View>
  );
};
 
export default CustomSidebarMenu;
 
const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '50%',
    height: '100%',
    backgroundColor: theme.colorAmber,
    paddingTop: 40,
    color: 'white',
  },
  profileHeader: {
    flexDirection: 'row',
    backgroundColor: '#307ecc',
    padding: 15,
    textAlign: 'center',
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: 'white',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeaderText: {
    color: 'white',
    alignSelf: 'center',
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: '#e2e2e2',
    marginTop: 15,
  },

  drawerLabel: {
    fontSize: 14,
  },
  drawerLabelFocused: {
    fontSize: 14,
    color: '#551E18',
    fontWeight: '500',
  },
  drawerItem: {
    height: 50,
    justifyContent: 'center'
  },
  drawerItemFocused: {
    backgroundColor: '#ba9490',
  },
});