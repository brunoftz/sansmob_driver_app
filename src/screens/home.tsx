import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TopButton } from '../components/TopButton';
import { CardOption } from '../components/CardOption';
import { Title } from '../components/Title';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

<CardOption
  label="Dados pessoais"
  locked
  iconComponent={MaterialCommunityIcons}
  iconName="lock-outline"
/>

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TopButton iconName="menu" style={styles.topButton}onPress={() => { /* open drawer or menu */ }} />
      <Title>Olá, motorista!</Title>
      <Text style={styles.subtitle}>
        Preencha as etapas obrigatórias para trabalhar conosco.
      </Text>
      <CardOption
        label="Dados pessoais"
        iconComponent={MaterialCommunityIcons}
        iconName="lock-open-outline"/>


      <CardOption
        label="Veículo"
        locked
        iconComponent={MaterialCommunityIcons}
        iconName="lock"/>

  
      <CardOption
        label="Aceite de condições"
        locked
        iconComponent={MaterialCommunityIcons}
        iconName="lock"/>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#14181B',
      padding: 44,
      justifyContent: 'flex-start',
    },
    subtitle: {
      color: '#aaa',
      fontSize: 20,
      marginBottom: 20,
    },
    topButton:{
      marginBottom:50
    }
});