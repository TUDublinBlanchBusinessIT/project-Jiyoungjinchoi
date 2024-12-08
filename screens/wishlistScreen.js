import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Button } from 'react-native';

export default function WishlistScreen({ navigation }) {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header with house icon */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Image
            source={require('../assets/houseicon.png')}
            style={styles.headerIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Wishlist</Text>
      </View>

      {/* Wishlist Item */}
      <ScrollView style={styles.wishlistContainer}>
        <View style={styles.wishlistItem}>
          <Image
            source={require('../assets/shoes1.jpeg')} 
            style={styles.shoeImage}
          />
          <View style={styles.itemDetails}>
            <Text style={styles.itemTitle}>Nike Air Force 1</Text>
            <View style={styles.sizeContainer}>
              <Text style={styles.sizeText}>Size:</Text>
              <Text style={styles.sizeOption}>9</Text>
            </View>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() => setChecked(!checked)}
            >
              <Text style={styles.checkboxText}>
                {checked ? '✓' : '⭘'} Select
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Checkout Button */}
      <TouchableOpacity 
        style={styles.checkoutButton} 
        onPress={() => navigation.navigate('Checkout')}
      >
        <Text style={styles.checkoutText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 45,
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
  wishlistContainer: {
    marginTop: 20,
  },
  wishlistItem: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  shoeImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  itemDetails: {
    marginLeft: 15,
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  sizeContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  sizeText: {
    fontSize: 16,
    marginRight: 10,
  },
  sizeOption: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkbox: {
    marginTop: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
  },
  checkboxText: {
    fontSize: 16,
    color: '#555',
  },
  checkoutButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#4682b4',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 10,
  },
  checkoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
