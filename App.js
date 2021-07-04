import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AlvaradoScreen  from './src/AlvaradoScreen';
import ProfileScreen  from './src/ProfileScreen';

export default function App() {
  return (
    // <AlvaradoScreen/>
    <ProfileScreen/>
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
