import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Text,
} from 'react-native';
import {connect} from 'react-redux';
import {useUserContext} from '../context/user/user.context';
import {api, config} from '../redux/helpers/api';
import {fetchUser, updateUser} from '../redux/slices/user.slice';
import store from '../redux/store';
import {font, theme} from '../theme';

const coffeeImage = require('../../assets/images/cofee-background.jpg');

const Profile = () => {
  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  };

  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState('Update');

  const {user} = useUserContext();

  useEffect(() => {
    setValues(user);
  }, [user]);

  const handleInputChange = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleUpdate = e => {
    if (e) e.preventDefault();
    setStatus('Saving...');
    store
      .dispatch(updateUser(values))
      .then(() => {
        setStatus('Saved!');
        setTimeout(() => {
          setStatus('Update');
        }, 2000);
      })
      .catch(error => {
        console.log(error.response.data.message);
      });
  };

  return (
    <ImageBackground source={coffeeImage} style={styles.container}>
      <View
        style={{flex: 1, paddingTop: 100, backgroundColor: 'rgba(0,0,0,0.3)'}}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <KeyboardAvoidingView enabled>
            <Text
              style={{
                fontSize: 20,
                textAlign: 'center',
                fontWeight: 'bold',
                color: theme.colorWhite,
              }}>
              Update your Profile
            </Text>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={text => handleInputChange('firstname', text)}
                underlineColorAndroid="#f000"
                placeholder="Enter First Name"
                placeholderTextColor="#fff"
                autoCapitalize="sentences"
                returnKeyType="next"
                blurOnSubmit={false}
                defaultValue={user.firstname}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={text => handleInputChange('lastname', text)}
                underlineColorAndroid="#f000"
                placeholder="Enter Last Name"
                placeholderTextColor="#fff"
                autoCapitalize="sentences"
                returnKeyType="next"
                blurOnSubmit={false}
                defaultValue={user.lastname}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={text => handleInputChange('email', text)}
                underlineColorAndroid="#f000"
                placeholder="Enter Email"
                placeholderTextColor="#fff"
                keyboardType="email-address"
                returnKeyType="next"
                blurOnSubmit={false}
                defaultValue={user.email}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={text => handleInputChange('password', text)}
                underlineColorAndroid="#f000"
                placeholder="Enter Password"
                placeholderTextColor="#fff"
                returnKeyType="next"
                secureTextEntry={true}
                blurOnSubmit={false}
                defaultValue={user.password}
                name="password"
              />
            </View>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleUpdate}>
              <Text style={styles.buttonTextStyle}>{status}</Text>
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
    fontFamily: font.fontFamilyBold,
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
});

export default Profile;
