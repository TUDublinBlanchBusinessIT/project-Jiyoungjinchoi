import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('./assets/SoleMateLogo.jpeg')}
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
            source={require('./assets/shoes1.jpeg')}
            style={styles.shoeImage}
          />
          <Text style={styles.shoeText}>Air Force 1</Text>
        </View>
        {/* Shoe 2 */}
        <View style={styles.deal}>
          <Image
            source={require('./assets/shoes2.png')}
            style={styles.shoeImage}
          />
          <Text style={styles.shoeText}>Jordan 1</Text>
        </View>
      </View>

      {/* Footer Navigation */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>Wishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>Account</Text>
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
    marginBottom: 20,
    marginTop: 20,
  },
  logo: {
    width: 200,
    height: 80,
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
    fontSize: 20,
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
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  shoeText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
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
  navText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007BFF',
  },
});
