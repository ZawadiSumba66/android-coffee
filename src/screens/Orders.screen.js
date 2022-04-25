import React from  'react';

import {StyleSheet, View, Text} from 'react-native';

export const Orders = () => {
    return (
        <View style={styles.container}>
            <Text>Orders!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})