import React, { useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { connect, useDispatch } from "react-redux";
import { getCoffeePosts } from "../redux/slices/categories.slice";
import Coffee from "../components/coffee/Coffee";
import { font } from "../theme";

const Home = ({ latte, espresso, popular, navigation })  => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCoffeePosts());
  }, [])

  console.log('popular coffee', popular);
  return (
   <View style={styles.container}>
      <Text style={styles.categoryTitle}>Popular</Text>
      <View>
        <FlatList 
          numColumns={3}
          data={popular}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <Coffee coffee={item} handlePress={() => navigation.navigate('CustomizeCoffee', item)} />
          )}
        /> 
      </View>
      <Text style={styles.categoryTitle}>Latte</Text>
      <View>
      <FlatList
          numColumns={3}
          data={latte}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <Coffee coffee={item} handlePress={() => navigation.navigate('CustomizeCoffee', item)} />
          )}
        /> 
      </View>
      <Text style={styles.categoryTitle}>Espresso</Text>
      <View>
      <FlatList 
          numColumns={3}
          data={espresso}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <Coffee coffee={item} handlePress={() => navigation.navigate('CustomizeCoffee', item)} />
          )}
        /> 
      </View>
   </View>   
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D4D1D1',
    fontFamily: font.fontFamilyBold
  },
  categoryTitle: {
    fontWeight: "bold",
    fontSize: 22,
    textDecorationLine: "underline",
    marginLeft: 15,
    marginTop: 5
  }
})

const mapStateToProps = (state) => ({
  popular: state.data.popular,
  latte: state.data.latte,
  espresso: state.data.espresso,
});

export default connect(mapStateToProps)(Home);