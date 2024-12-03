import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importing useNavigation hook

export default function MainScreen() {
  const navigation = useNavigation(); // Using the useNavigation hook to navigate between screens

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../assets/SoleMateLogo.jpeg')}
          style={styles.logo}
        />
      </View>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        placeholderTextColor="#888"
      />

      {/* Best Deals Section */}
      <Text style={styles.sectionTitle}>Best Deals</Text>
      <View style={styles.dealsContainer}>
        {/* Shoe 1 */}
        <View style={styles.deal}>
          <Image
            source={require('../assets/shoes1.jpeg')}
            style={styles.shoeImage}
          />
          <Text style={styles.shoeText}>Air Force 1</Text>
          <Text style={styles.priceText}>€75</Text>
        </View>
        {/* Shoe 2 */}
        <View style={styles.deal}>
          <Image
            source={require('../assets/shoes2.png')}
            style={styles.shoeImage}
          />
          <Text style={styles.shoeText}>Air Force Red</Text>
          <Text style={styles.priceText}>€89.99</Text>
        </View>
      </View>

      {/* Footer Navigation */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Menu')}>
          <Image
            source={require('../assets/menuicon.png')}
            style={styles.icon}
          />
          <Text style={styles.navText}>Menu</Text>
        </TouchableOpacity>
        
        {/* Wishlist Icon: Navigate to WishlistScreen */}
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Wishlist')}>
          <Image
            source={require('../assets/wishlisticon.png')}
            style={styles.icon}
          />
          <Text style={styles.navText}>Wishlist</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navButton}>
          <Image
            source={require('../assets/accounticon.png')}
            style={styles.icon}
          />
          <Text style={styles.navText}>Account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0F8FF',
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  logo: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
  },
  searchBar: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  dealsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  deal: {
    alignItems: 'center',
  },
  shoeImage: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  shoeText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#555',
  },
  priceText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginTop: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 20,
  },
  navButton: {
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  navText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#696969',
  },
});
