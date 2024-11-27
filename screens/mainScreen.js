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
        <TouchableOpacity style={styles.navButton}>
          <Image
            source={require('../assets/menuicon.png')}
            style={styles.icon}
          />
          <Text style={styles.navText}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
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
<<<<<<< HEAD
    width: 300,
    height: 200,
=======
    width: 400,
    height: 300,
>>>>>>> ab12e72a337abb0df97b65b67747bd4c50be2220
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
<<<<<<< HEAD
    fontSize: 24,
=======
    fontSize: 30,
>>>>>>> ab12e72a337abb0df97b65b67747bd4c50be2220
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
<<<<<<< HEAD
    width: 130,
    height: 130,
=======
    width: 200,
    height: 200,
>>>>>>> ab12e72a337abb0df97b65b67747bd4c50be2220
    resizeMode: 'contain',
    marginBottom: 10,
  },
  shoeText: {
<<<<<<< HEAD
    fontSize: 20,
=======
    fontSize: 24,
>>>>>>> ab12e72a337abb0df97b65b67747bd4c50be2220
    fontWeight: '500',
    color: '#555',
  },
  priceText: {
<<<<<<< HEAD
    fontSize: 14,
=======
    fontSize: 16,
>>>>>>> ab12e72a337abb0df97b65b67747bd4c50be2220
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
<<<<<<< HEAD
    width: 30,
    height: 30,
=======
    width: 40,
    height: 40,
>>>>>>> ab12e72a337abb0df97b65b67747bd4c50be2220
    resizeMode: 'contain',
    marginBottom: 5,
  },
  navText: {
<<<<<<< HEAD
    fontSize: 14,
    fontWeight: 'bold',
    color: '#696969',
  },
});
=======
    fontSize: 16,
    fontWeight: 'bold',
    color: '#696969',
  },
});
>>>>>>> ab12e72a337abb0df97b65b67747bd4c50be2220
