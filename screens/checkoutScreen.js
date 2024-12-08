import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { auth, firestore } from '../firebaseConfig';  // Import auth and firestore from firebaseConfig
import { doc, setDoc } from 'firebase/firestore';  // Firestore methods

export default function CheckoutScreen({ navigation }) {
  const [shippingAddress, setShippingAddress] = useState('');
  const [paymentInfo, setPaymentInfo] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCheckout = async () => {
    // Ensure that all fields are filled out
    if (!shippingAddress || !paymentInfo || !contactInfo) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    // Check if the user is logged in
    const user = auth.currentUser;  // Get the currently logged-in user

    if (!user) {
      setErrorMessage('You must be logged in to proceed.');
      return;
    }

    try {
      // Save the checkout information to Firestore under the 'checkouts' collection
      await setDoc(doc(firestore, 'checkouts', user.uid), {
        shippingAddress,
        paymentInfo,
        contactInfo,
        userId: user.uid,  // Include user UID to link to the correct user
        timestamp: new Date(),
      });

      console.log('Checkout information saved to Firestore');
      navigation.navigate('Payment');  // Navigate to Payment screen (or wherever you need)

    } catch (error) {
      console.error('Error saving checkout info: ', error);
      setErrorMessage('An error occurred while processing your checkout.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Image
            source={require('../assets/houseicon.png')} // Replace with the correct icon path
            style={styles.headerIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Checkout</Text>
      </View>

      {/* Checkout Form */}
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Order Summary</Text>

        {/* Wishlist Item */}
        <View style={styles.itemContainer}>
          <Image
            source={require('../assets/shoes1.jpeg')} // Replace with the correct shoe image
            style={styles.shoeImage}
          />
          <View style={styles.itemDetails}>
            <Text style={styles.itemTitle}>Air Force 1</Text>
            <Text style={styles.itemPrice}>€75</Text>
          </View>
        </View>

        <Text style={styles.formTitle}>Shipping Information</Text>
        <TextInput
          style={styles.input}
          placeholder="Shipping Address *"
          placeholderTextColor="#888"
          value={shippingAddress}
          onChangeText={setShippingAddress}
        />

        <Text style={styles.formTitle}>Payment Information</Text>
        <TextInput
          style={styles.input}
          placeholder="Payment Info *"
          placeholderTextColor="#888"
          value={paymentInfo}
          onChangeText={setPaymentInfo}
        />

        <Text style={styles.formTitle}>Contact Information</Text>
        <TextInput
          style={styles.input}
          placeholder="Email or Phone Number *"
          placeholderTextColor="#888"
          value={contactInfo}
          onChangeText={setContactInfo}
        />

        {errorMessage ? (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        ) : null}

        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
          <Text style={styles.buttonText}>Proceed to Payment</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  formContainer: {
    marginTop: 20,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 20,
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
    color: '#555',
  },
  itemPrice: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
  },
  checkoutButton: {
    backgroundColor: '#4682b4',
    paddingVertical: 12,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  errorMessage: {
    color: 'red',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
});
