import React from  'react';

import {StyleSheet, View, Text} from 'react-native';
import Coffees from '../components/coffee/Coffees';

export const Home = () => {
    return (
        <View style={styles.container}>
            <Coffees />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})