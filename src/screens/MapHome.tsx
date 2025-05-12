import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Colors from '../constants/colors';


export default function MapHomeScreen() {
  return (
    <View style={styles.container}>
      {/* Map Background */}
      <MapView
        provider={PROVIDER_GOOGLE} // usa google maps
        style={styles.map}
        initialRegion={{
            latitude: -20.3222, // Vitória/ES
            longitude: -40.3376,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
        }}
        customMapStyle={darkMapStyle}
         // Dark theme like in your image
      />

      {/* Overlay UI */}
      <View style={styles.overlay}>
        {/* Hamburger Menu */}
        <View style={styles.menuButton}>
          <TouchableOpacity style={styles.circle}>
            <Text style={styles.menuText}>☰</Text>
          </TouchableOpacity>
        </View>

        {/* Balance Display */}
        <View style={styles.balance}>
          <Text style={styles.balanceText}>
            <Text style={{ color: 'green' }}>R$</Text> 219,00
          </Text>
        </View>

        {/* Start Button */}
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>Iniciar</Text>
        </TouchableOpacity>

        {/* Status Bar */}
        <View style={styles.statusBar}>
          <Text style={styles.statusText}>🔴 Você está Offline</Text>
        </View>
      </View>
    </View>
  );
}

const darkMapStyle = [
    {
      elementType: 'geometry',
      stylers: [{ color: '#212121' }],
    },
    {
      elementType: 'labels.icon',
      stylers: [{ visibility: 'off' }],
    },
    {
      elementType: 'labels.text.fill',
      stylers: [{ color: '#757575' }],
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [{ color: '#212121' }],
    },
    {
      featureType: 'administrative',
      elementType: 'geometry',
      stylers: [{ color: '#757575' }],
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [{ color: '#181818' }],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{ color: '#373737' }],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{ color: '#000000' }],
    },
  ];
  
  const styles = StyleSheet.create({
    container: { flex: 1 },
    map: { flex: 1 },
    overlay: { ...StyleSheet.absoluteFillObject, justifyContent: 'space-between' },
  
    menuButton: {
      position: 'absolute',
      top: 40,
      left: 20,
    },
    circle: {
      backgroundColor: Colors.primaryBlue,
      borderRadius: 20,
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    menuText: {
      fontSize: 22,
      color: '#fff',
    },
  
    balance: {
      position: 'absolute',
      top: 40,
      alignSelf: 'center',
      backgroundColor: '#fff',
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 50,
      elevation: 5,
    },
    balanceText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  
    startButton: {
      alignSelf: 'center',
      backgroundColor: Colors.primaryBlue,
      paddingHorizontal: 30,
      paddingVertical: 14,
      borderRadius: 50,
      marginBottom: 80,
    },
    startButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  
    statusBar: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      backgroundColor: '#000',
      padding: 12,
      alignItems: 'center',
    },
    statusText: {
      color: '#ccc',
      fontSize: 14,
    },
  });