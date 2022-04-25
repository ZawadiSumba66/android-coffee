import React from  'react';

import {StyleSheet, View, Text} from 'react-native';

export const Home = () => {
    return (
        <View style={styles.container}>
            <Text>Home!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})