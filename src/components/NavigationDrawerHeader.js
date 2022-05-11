import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
 
const NavigationDrawerHeader = ({navigationProps}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => navigationProps.toggleDrawer()}>
        <Image
          source={{
            uri:
              'data:image/png;base64,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',
          }}
          style={{width: 25, height: 25, marginLeft: 5}}
        />
      </TouchableOpacity>
    </View>
  );
};
export default NavigationDrawerHeader;