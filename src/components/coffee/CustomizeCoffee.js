import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, Pressable, Button} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {getCoffeePost} from '../../redux/slices/categories.slice';
import {font, theme} from '../../theme';

const size = [
  {description: 'small'},
  {description: 'medium'},
  {description: 'large'},
];

const milk = [{type: 'Normal'}, {type: 'Soya Milk'}, {type: 'Oat Milk'}];

const topping = [
  {type: 'Almond'},
  {type: 'Caramel'},
  {type: 'Chocolate'},
  {type: 'Mint'},
  {type: 'Vodka'},
];

const CustomizeCoffee = ({post, route}) => {
  const [selectedSize, setSelectedSize] = useState();
  const [selectedMilk, setSelectedMilk] = useState();
  const [selectedTopping, setSelectedTopping] = useState();
  const [selectedPrice, setSelectedPrice] = useState(0);
  const dispatch = useDispatch();
  const {id} = route.params;
  console.log('customize coffee', id);

  useEffect(() => {
    dispatch(getCoffeePost(id));
  }, []);

  const handlePrice = option => {
    setSelectedSize(option);
    switch (option.description) {
      case 'small':
        return setSelectedPrice(post.price + 15);
      case 'medium':
        return setSelectedPrice(post.price + 20);
      case 'large':
        return setSelectedPrice(post.price + 25);
      default:
        return selectedPrice;
    }
  };

  const toggleModal = (e) => {
    if (e) e.preventDefault();
    setSelectedMilk(undefined);
    setSelectedTopping(undefined);
    setSelectedSize(undefined);
  };

  return (
    <View>
      <View>
        <Image source={{uri: post.image}} style={styles.coffeeImage} />
        <Text style={styles.coffeeText}>{post.name}</Text>
      </View>
      <View style={styles.parametersContainer}>
        <View style={styles.parameter}>
          <Text style={styles.parameterTitle}>Size:</Text>
          <View style={styles.options}>
            {size.map(option => (
              <Pressable 
                key={option.description}
                onPress={() => handlePrice(option)}
                style={[styles.optionItem, selectedSize?.description === option.description ? styles.selectedOption : undefined]}
              >
                <Text style={[styles.optionItemText, selectedSize?.description === option.description ? styles.selectedOption : undefined]}>{option.description}</Text>
              </Pressable>
            ))}
          </View>
        </View>
        <View style={styles.parameter}>
          <Text style={styles.parameterTitle}>Milk:</Text>
          <View style={styles.options}>
            {milk.map(option => (
              <Pressable 
                key={option.type}
                onPress={() => setSelectedMilk(option)}
                style={[styles.optionItem, selectedMilk?.type === option.type ? styles.selectedOption : undefined]}
              >
                <Text style={[styles.optionItemText, selectedMilk?.type === option.type ? styles.selectedOption : undefined]}>{option.type}</Text>
              </Pressable>
            ))}
          </View>
        </View>
        <View style={styles.parameter}>
          <Text style={styles.parameterTitle}>Topping:</Text>
          <View style={styles.options}>
            {topping.map(option => (
              <Pressable 
                key={option.type}
                onPress={() => setSelectedTopping(option)}
                style={[styles.optionItem, selectedTopping?.type === option.type ? styles.selectedOption : undefined]}
              >
                <Text style={[styles.optionItemText, selectedTopping?.type === option.type ? styles.selectedOption : undefined]}>{option.type}</Text>
              </Pressable>
            ))}
          </View>
        </View>
        <View style={[styles.parameter, {alignItems: 'center'}]}>
          <Text style={styles.parameterTitle}>Total Price:</Text>
          <Text style={{fontFamily: font.fontFamilyBold, fontSize: 20}}> 
              KES
              {' '}
              {selectedPrice.toFixed(2)}</Text>
        </View>
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <Button
          onPress={toggleModal}
          title="CHECkOUT"
          color={theme.colorAmber}
          disabled={selectedSize ? false : true}
          accessibilityLabel="Checkout to the payment modal"
        />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  coffeeImage: {
    height: 300,
    width: 400,
    position: 'relative',
  },

  coffeeText: {
    position: 'absolute',
    bottom: 10,
    fontSize: 25,
    fontFamily: font.fontFamilyBold,
    left: 20,
    color: theme.colorWhite,
  },

  parameter: {
    marginBottom: 10,
    flexDirection: 'row',
  },

  parameterTitle: {
    fontSize: 17,
    marginRight: 5,
    fontFamily: font.fontFamilyBold,
  },

  parametersContainer: {
    marginHorizontal: 10,
    width: 300,
    marginTop: 15
  },

  options: {
    flexDirection: 'row',
    flexWrap:'wrap'
  },

  selectedOption: {
    backgroundColor: theme.colorBlack,
    color: theme.colorWhite
  },

  optionItem: {
    backgroundColor: theme.colorGray,
    margin: 4,
    padding: 3,
    borderRadius: 6
  },

  optionItemText: {
    fontSize: 17,
    fontFamily: font.fontFamilyBold,
    padding: 3
  }
});

const mapStateToProps = state => ({
  post: state.data.post,
});

export default connect(mapStateToProps)(CustomizeCoffee);
