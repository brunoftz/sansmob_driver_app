import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Title } from '../components/Title';
import Colors from '../constants/colors';
import Icon from 'react-native-vector-icons/AntDesign'; // Pacote para ícones

export default function TravelSuccessScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.iconBackground}>
          {/* Usando o ícone 'check' da AntDesign */}
          <Icon name="check" size={60} color={Colors.white} />
        </View>
      </View>
      <Title style={styles.title}>Viagem Finalizada com sucesso!</Title>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgDark,
    padding: 44,
    justifyContent: 'center',
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40, // Faz o círculo
    backgroundColor: '#34A853', // Cor de fundo do círculo
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20, // Espaço entre o ícone e o texto
  },
  iconBackground: {
    width: 60, // Ajusta o fundo branco para o tamanho do ícone
    height: 60, // Ajusta o fundo branco para o tamanho do ícone
    borderRadius: 30, // Faz o fundo do ícone arredondado
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Colors.white,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
