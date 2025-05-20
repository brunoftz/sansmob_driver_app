import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, PixelRatio } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Colors from '../constants/colors';
import Modal from 'react-native-modal';
import BottomModal from '../components/BottomModal';
import { Button } from '../components/Button/Index';
import { Title } from '../components/Title';
import Icon from 'react-native-vector-icons/Feather';
import { CardOption } from '../components/CardOption';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import darkMapStyle from '../constants/mapstyle';
import { ModalContent } from '../components/RideModal';

export default function MapHomeScreen({ navigation }) {
  const [status, setStatus] = useState({ icon: <Icon name='power' color='red' size={30} />, text: 'Você está offline' });
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalStep, setModalStep] = useState<'route' | 'apps'>('route');
  const [countdown, setCountdown] = useState(3);
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);

  const [isAppLoading, setIsAppLoading] = useState(false);

  const simulateRouteLoading = () => {
    setIsAppLoading(true);
    setModalStep('loading');

    setTimeout(() => {
      setIsAppLoading(false);
      setModalStep('done');
    }, 3000);
  };

  useEffect(() => {
    if (modalStep === 'travel') {
      setCountdown(2);
      setShowSuccessScreen(false);

      const countdownInterval = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(countdownInterval);
            setShowSuccessScreen(true);
            navigation.navigate('TravelSuccess');
            setTimeout(() => {
              setShowSuccessScreen(false);
              setModalVisible(false);
              setStatus({ icon: <Icon name='power' color='red' size={30} />, text: 'Você está offline' });
            }, 3000);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [modalStep]);

  const handleStart = () => {
    setLoading(true);
    setStatus({ icon: <Icon name='power' color='green' size={30} />, text: 'Buscando passageiros...' });

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setStatus({ icon: <Icon name='power' color='green' size={30} />, text: 'Buscando passageiros...' });
      setModalVisible(true);
    }, 3000); // 3 seconds delay
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -20.3222,
          longitude: -40.3376,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        customMapStyle={darkMapStyle}
      />

      <View style={styles.overlay}>
        {/* Menu Button */}
        <View style={styles.menuButton}>
          <TouchableOpacity style={styles.circle} onPress={() => { navigation.navigate('DriverMenu') }}>
            <Icon name={'menu'} color={'white'} size={25} />
          </TouchableOpacity>
        </View>

        {/* Balance Display */}
        <View style={styles.balance}>
          <Text style={styles.balanceText}>
            <Text style={{ color: '#39D2C0' }}>R$</Text> 219,00
          </Text>
        </View>

        {/* Start Button */}
        <TouchableOpacity style={styles.startButton} onPress={() => {
          setModalStep('route');
          handleStart();
        }} disabled={loading}>
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.startButtonText}>Iniciar</Text>
          )}
        </TouchableOpacity>

        {/* Status Bar */}
        <View style={styles.statusBar}>
          <View style={styles.statusIconContainer}>
            {status.icon}
            
          <Text style={styles.statusText}>{status.text}</Text>
          </View>

        </View>
      </View>


      <BottomModal
  isVisible={isModalVisible}
  onClose={() => {
    setModalVisible(false);
    setStatus({ icon: <Icon name='power' color='red' size={30} />, text: 'Você está offline' });
  }}
>
  <ModalContent
    modalStep={modalStep}
    setModalStep={setModalStep}
    simulateRouteLoading={simulateRouteLoading}
    countdown={countdown}
    showSuccessScreen={showSuccessScreen}
  />
</BottomModal>

    </View >
  );
}



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
    borderRadius: 27,
    padding: 15,
    height: 54,
    width: 54,
    justifyContent: 'center',
    alignItems: 'center',
  },

  balance: {
    position: 'absolute',
    top: 40,
    alignSelf: 'center',
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 50,
    elevation: 5,
  },
  balanceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primaryDark
  },

  startButton: {
    alignSelf: 'center',
    backgroundColor: Colors.primaryBlue,
    paddingHorizontal: 30,
    paddingVertical: 14,
    width: 110,
    height: 110,
    borderRadius: 110 / PixelRatio.get(),
    top: 840,
    justifyContent: 'center',
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
    
    paddingBottom:50,
    paddingTop:20,
    alignItems: 'center',
  },

  statusIconContainer: {
    flexDirection: 'row', // Garante que o ícone e o texto fiquem lado a lado
    alignItems: 'center', // Alinha o ícone e o texto verticalmente
  },

  statusText: {
    color: 'gray',
    fontWeight:'heavy',
    fontSize: 18,
    marginLeft: 8, // Dá um espaço entre o ícone e o texto
  },


});
