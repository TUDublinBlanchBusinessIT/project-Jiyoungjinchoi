import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/mainScreen'; 
import MenuScreen from './screens/menuScreen'; 
import WishlistScreen from './screens/wishlistScreen';
import AccountScreen from './screens/accountScreen';
import RegisterScreen from './screens/registerScreen';
import CheckoutScreen from './screens/checkoutScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ headerShown: false }} // Hide header for the main screen
        />
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{ headerShown: false }} // Hide header for the menu screen
        />
        <Stack.Screen
          name="Wishlist"
          component={WishlistScreen}
          options={{ headerShown: false }} // Hide header for the wishlist screen
        />
         <Stack.Screen
          name="Account"
          component={AccountScreen}
          options={{ headerShown: false }} // Hide header for the account screen
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }} // Hide header for the register screen
        />
        <Stack.Screen
          name="Checkout"
          component={CheckoutScreen}
          options={{ headerShown: false }} // Hide header for the register screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}