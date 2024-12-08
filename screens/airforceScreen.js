import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Picker } from 'react-native';

export default function AirForceScreen({ navigation }) {
  const [size, setSize] = useState('UK 3');  

  const handleAddToWishlist = () => {
    
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/houseicon.png')}  
            style={styles.headerIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Air Force 1</Text>
      </View>

      {/* Product Details */}
      <Text style={styles.price}>€75</Text>
      
      {/* Image of Air Force 1 */}
      <Image
        source={require('../assets/shoes1.jpeg')}  
        style={styles.productImage}
      />

      {/* Size Selection Dropdown */}
      <Text style={styles.sizeLabel}>Select Size</Text>
      <Picker
        selectedValue={size}
        style={styles.picker}
        onValueChange={(itemValue) => setSize(itemValue)}
      >
        <Picker.Item label="UK 3" value="UK 3" />
        <Picker.Item label="UK 4" value="UK 4" />
        <Picker.Item label="UK 5" value="UK 5" />
        <Picker.Item label="UK 6" value="UK 6" />
        <Picker.Item label="UK 7" value="UK 7" />
        <Picker.Item label="UK 8" value="UK 8" />
        <Picker.Item label="UK 9" value="UK 9" />
        <Picker.Item label="UK 10" value="UK 10" />
        <Picker.Item label="UK 11" value="UK 11" />
        <Picker.Item label="UK 12" value="UK 12" />
      </Picker>

      {/* Add to Wishlist Button */}
      <TouchableOpacity style={styles.button} onPress={handleAddToWishlist}>
        <Text style={styles.buttonText}>Add To Wishlist</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  headerIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  productImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  sizeLabel: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: 150,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4682b4',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
