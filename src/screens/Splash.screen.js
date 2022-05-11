import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native';
 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SplashIcon } from '../components/Icons';
import { font, theme } from '../theme';
 
const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);
 
  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      AsyncStorage.getItem('token').then((value) =>
        navigation.replace(
          value === null ? 'Auth' : 'DrawerNavigation'
        ),
      );
    }, 5000);
  }, []);
 
  return (
    <View style={styles.container}>
      <SplashIcon style={styles.splash}/>
      <Text style={styles.header}>Flavored Cafe</Text>
      <ActivityIndicator
        animating={animating}
        color="#ffffff"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};
 
export default SplashScreen;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
    position: 'relative'
  },
  activityIndicator: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    position: 'absolute',
    bottom: 50
  },
  header: {
    fontFamily: font.fontFamilyBold,
    fontSize: 25,
    color: theme.colorWhite,
    position: 'absolute',
    bottom: 200
  }
});