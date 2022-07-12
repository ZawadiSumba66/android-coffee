import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Keyboard,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';
import { OrdersIcon } from '../components/Icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Loader from '../components/Loader';
import { api } from '../redux/helpers/api';
import { font, theme } from '../theme';

const coffeeImage = require("../../assets/images/cofee-background.jpg");
 
const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const emailInputRef = createRef();
  const passwordInputRef = createRef();
 
  const handleSubmit = async() => {
    if (!email) {
      alert('Please fill Email');
      return;
    }
    if (!password) {
      alert('Please fill Password');
      return;
    }

    const user = {
      password,
      email
    }
    setLoading(true);
    try {
        const response = await api.post('/auth', { user });
        if (response.data.token) {
          AsyncStorage.setItem('token', response.data.token);
          console.log('response', response.data.token)
          navigation.navigate('DrawerNavigation');
          return response.data;
        }
        return response.data;
      } catch (error) {
        setLoading(false);
        setError(error.response.data.errors)
        return error.response.data.errors;
      }
  };
 
  return (
    <ImageBackground source={coffeeImage} style={styles.mainBody}>
      <View style={{ flex: 1, paddingTop: 120, backgroundColor: 'rgba(0,0,0,0.3)'}}>
        <Loader loading={loading} />
        <ScrollView
          keyboardShouldPersistTaps="handled"
        >
          <View>
            {/* <KeyboardAvoidingView enabled> */}
              <View style={{display: 'flex', alignItems: 'center'}}>
                  <OrdersIcon />
                  <Text style={{fontFamily: font.fontFamilyBold, fontSize: 25, color: '#fff'}}>Flavored Cafe</Text>
              </View>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={(UserEmail) =>
                    setEmail(UserEmail)
                  }
                  placeholder="Enter Email" //dummy@abc.com
                  placeholderTextColor="#fff"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  returnKeyType="next"
                  underlineColorAndroid="#f000"
                  blurOnSubmit={false}
                />
              </View>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={(UserPassword) =>
                    setPassword(UserPassword)
                  }
                  placeholder="Enter Password" //12345
                  placeholderTextColor="#fff"
                  keyboardType="default"
                  ref={passwordInputRef}
                  onSubmitEditing={Keyboard.dismiss}
                  blurOnSubmit={false}
                  secureTextEntry={true}
                  underlineColorAndroid="#f000"
                  returnKeyType="next"
                />
              </View>
              {error != '' ? (
                <Text style={styles.errorTextStyle}>
                  {error}
                </Text>
              ) : null}
              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={handleSubmit}>
                <Text style={styles.buttonTextStyle}>LOGIN</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('RegisterScreen')}>
                <Text style={styles.registerTextStyle}>New Here ? Register</Text>
              </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center', 
    alignContent: 'center'
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
    marginBottom: 25,
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
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#fff',
    borderWidth: 3
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textDecorationLine: 'underline',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});


export default Login;