import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function MenuScreen({ navigation }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const brands = [
    'Nike',
    'Adidas',
    'New Balance',
    'Puma',
    'Vans',
    'Converse',
    'Crocs',
    'UGG',
    'Fila',
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Image
            source={require('../assets/houseicon.png')}
            style={styles.headerIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Menu</Text>
      </View>

      {/* All Brands */}
      <View style={styles.menuItemContainer}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => setShowDropdown(!showDropdown)}
        >
          <Image
            source={require('../assets/shoeicon.png')}
            style={styles.icon}
          />
          <Text style={styles.menuItemText}>All Brands</Text>
        </TouchableOpacity>

        {showDropdown &&
          brands.map((brand, index) => (
            <TouchableOpacity key={index} style={styles.subMenuItem}>
              <Image
                source={require('../assets/shoeicon.png')}
                style={styles.icon}
              />
              <Text style={styles.subMenuText}>{brand}</Text>
            </TouchableOpacity>
          ))}
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center the header
    marginTop: 40,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerIcon: {
    position: 'absolute', // Position the house icon to the left
    left: 0,
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  menuItemContainer: {
    marginTop: 40, // Move the menu closer to the center
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuItemText: {
    fontSize: 18,
    marginLeft: 10,
    fontWeight: '500',
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  subMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingLeft: 10, // Indent submenu items
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  subMenuText: {
    fontSize: 16,
    color: '#555',
    marginLeft: 10, // Space between icon and text
  },
});
