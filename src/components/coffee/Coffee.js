import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Coffee = ({ coffee, handlePress  }) => {
  return (
    <View style={styles.coffeeItem}>
        <TouchableOpacity onPress={handlePress}>
          <Image source={{ uri: coffee.image }} style={styles.coffeeImage} />
        </TouchableOpacity>
        <View>
          <Text style={styles.coffeeLabel}>{coffee.name}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  coffeeItem: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 5
  },

  coffeeLabel: {
    fontWeight: "700",
    fontSize: 15
  },

  coffeeImage: {
    height: 100,
    width: 100
  }
})

export default Coffee;