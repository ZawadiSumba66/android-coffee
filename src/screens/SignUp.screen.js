import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {OrdersIcon} from '../components/Icons';

import Loader from '../components/Loader';
import {font, theme} from '../theme';
import { api } from '../redux/helpers/api';

const coffeeImage = require('../../assets/images/cofee-background.jpg');

const SignUp = props => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);
  const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);

  const handleSubmit = async () => {
    if (!firstname) {
      alert('Please fill First Name');
      return;
    }
    if (!lastname) {
      alert('Please fill Last Name');
      return;
    }
    if (!email) {
      alert('Please fill Email');
      return;
    }
    if (!password) {
      alert('Please fill Password');
      return;
    }
    if (!confirmPassword) {
      alert('Please confirm Password');
      return;
    }
    //Show Loader

    const user = {
      firstname,
      lastname,
      email,
      password,
      password_confirmation: confirmPassword,
    };
     
      setLoading(true);
      try {
      const response = await api.post('/users', { user });
        if (response.data.token) {
          AsyncStorage.setItem('token', response.data.token);
          setLoading(true);
          setIsRegistraionSuccess(true);
          return response.data;
        }
        return response.data;
      } catch (error) {
        if (error) {
          setLoading(false);
          setError(error.response.data.message);
          return  error.response.data.message;
       }
      }
  };

  if (isRegistraionSuccess) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <Text style={styles.successTextStyle}>Registration Successful!</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <ImageBackground source={coffeeImage} style={styles.container}>
      <View
        style={{flex: 1, paddingTop: 100, backgroundColor: 'rgba(0,0,0,0.3)'}}>
        <Loader loading={loading} />
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <View style={{alignItems: 'center'}}>
            <OrdersIcon />
            <Text
              style={{
                fontFamily: font.fontFamilyBold,
                fontSize: 25,
                color: '#fff',
              }}>
              Flavored Cafe
            </Text>
          </View>
          <KeyboardAvoidingView enabled>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserName => setFirstName(UserName)}
                underlineColorAndroid="#f000"
                placeholder="Enter First Name"
                placeholderTextColor="#fff"
                autoCapitalize="sentences"
                returnKeyType="next"
                blurOnSubmit={false}
                defaultValue={firstname}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserName => setLastName(UserName)}
                underlineColorAndroid="#f000"
                placeholder="Enter Last Name"
                placeholderTextColor="#fff"
                autoCapitalize="sentences"
                returnKeyType="next"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserEmail => setEmail(UserEmail)}
                underlineColorAndroid="#f000"
                placeholder="Enter Email"
                placeholderTextColor="#fff"
                keyboardType="email-address"
                returnKeyType="next"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserPassword => setPassword(UserPassword)}
                underlineColorAndroid="#f000"
                placeholder="Enter Password"
                placeholderTextColor="#fff"
                returnKeyType="next"
                secureTextEntry={true}
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserPassword => setConfirmPassword(UserPassword)}
                underlineColorAndroid="#f000"
                placeholder="Confirm Password"
                placeholderTextColor="#fff"
                returnKeyType="next"
                secureTextEntry={true}
                blurOnSubmit={false}
              />
            </View>
            {error != '' ? (
              error.map((item) => (
              <Text style={styles.errorTextStyle} key={Date.now() * Math.random()}>{item}</Text>
            ))
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmit}>
              <Text style={styles.buttonTextStyle}>REGISTER</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: theme.colorAmber,
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 3,
    borderRadius: 30,
    borderColor: '#fff',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: theme.colorBlack,
    textAlign: 'center',
    fontSize: 23,
    padding: 30,
  },
});

export default SignUp;
