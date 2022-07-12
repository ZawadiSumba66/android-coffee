import React, { useEffect, useState } from 'react';
import { 
    StyleSheet, 
    View, 
    ScrollView, 
    ImageBackground, 
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Text
 } from 'react-native';
import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../redux/slices/user.slice';
import store from '../redux/store';
import { font, theme } from '../theme';

const coffeeImage = require('../../assets/images/cofee-background.jpg');

const Profile = ({ user }) => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('Update');

    useEffect(() => {
      store.dispatch(fetchUser());
    }, []);

    const handleUpdate = (e) => {
      if (e) e.preventDefault();
      const user = {
        firstname,
        lastname,
        email,
        password,
      };

      setStatus('Saving...');
      store.dispatch(updateUser(user)).then(() => {
        setStatus('Saved!');
        setTimeout(() => {
          setStatus('Update');
        }, 2000);
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
                  defaultValue={user.firstname}
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
    )
}

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

const mapStateToProps = (state) => ({
  user: state.user.user,
});
  
export default connect(mapStateToProps)(Profile);
  