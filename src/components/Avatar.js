import React from 'react';
import {useDispatch, connect} from 'react-redux';
import DocumentPicker from 'react-native-document-picker';
import {View, Image, StyleSheet, Button} from 'react-native';
import {theme} from '../theme';
import {createAvatar, fetchAvatar} from '../redux/slices/avatar.slice';
import store from '../redux/store';

const Avatar = ({avatar}) => {
  const dispatch = useDispatch();

  const pickFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log(
        res.uri,
        res.type, // mime type
        res.name,
        res.size,
      );
      dispatch(createAvatar(res)); //here you can call your API and send the data to that API
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('error -----', err);
      } else {
        throw err;
      }
    }
  };

  useEffect(() => {
    store.dispatch(fetchAvatar());
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={avatar} />
      </View>
      <Button style={styles.button} title="Choose File" onPress={pickFile} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    borderRadius: 100,
    width: 150,
    height: 150,
    backgroundColor: theme.colorAmber,
    marginBottom: 20,
  },
  button: {
    color: theme.colorWhite,
    borderRadius: 10,
  },
});

const mapStateToProps = state => ({
  avatar: state.avatar.avatar,
});

export default connect(mapStateToProps)(Avatar);
