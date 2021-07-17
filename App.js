import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AlvaradoScreen  from './src/AlvaradoScreen';
import ProfileScreen  from './src/ProfileScreen';
import ConverScreen from './src/ConverScreen.js';
import LoginScreen from './src/transactions/Login';
import OverviewScreen from './src/transactions/Overview';
import PaymentScreen from './src/transactions/payment';
export default function App() {
  return (
    // <AlvaradoScreen/>
    // <ProfileScreen/>
    // <ConverScreen/>
    // <LoginScreen/>
    <OverviewScreen/>
    // <PaymentScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
