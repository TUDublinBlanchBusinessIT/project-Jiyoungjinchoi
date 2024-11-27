import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function MenuScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Menu</Text>
      </View>

      {/* Shoe Icon */}
      <View style={styles.shoeContainer}>
        <Image
          source={require('../assets/shoeicon.png')}
          style={styles.shoeIcon}
        />
      </View>

      {/* Menu Items */}
      <View style={styles.menuItemsContainer}>
        <TouchableOpacity style={styles.menuItem} onPress={() => alert('Go to Wishlist')}>
          <Text style={styles.menuItemText}>Wishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => alert('Go to Account')}>
          <Text style={styles.menuItemText}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => alert('Go to Settings')}>
          <Text style={styles.menuItemText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => alert('Go to Orders')}>
          <Text style={styles.menuItemText}>Orders</Text>
        </TouchableOpacity>
      </View>

      {/* Footer Navigation */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => alert('Go to Cart')}>
          <Text style={styles.footerText}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => alert('Go to Profile')}>
          <Text style={styles.footerText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  shoeContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  shoeIcon: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  menuItemsContainer: {
    marginBottom: 40,
  },
  menuItem: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#555',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007BFF',
  },
});
