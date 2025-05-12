import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TopButton } from '../components/TopButton';
import { CardOption } from '../components/CardOption';
import { Title } from '../components/Title';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/colors';



export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <TopButton iconName="menu" style={styles.topButton}onPress={() => { /* open drawer or menu */ }} /> */}
      <Title>Olá, motorista!</Title>
      <Text style={styles.subtitle}>
        Preencha as etapas obrigatórias para trabalhar conosco.
      </Text>
      <CardOption
        label="Dados pessoais"
        iconComponent={MaterialCommunityIcons}
        iconName="lock-open-outline"
        onPress={()=>{navigation.navigate('DataValidation')}}/>


      <CardOption
        label="Veículo"
        // locked
        iconComponent={MaterialCommunityIcons}
        iconName="lock"
        onPress={()=>{navigation.navigate('MapHome')}}/>

  
      <CardOption
        label="Termos e condições"
        locked
        iconComponent={MaterialCommunityIcons}
        iconName="lock"/>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.bgDark,
      padding: 44,
      justifyContent: 'center',
    },
    subtitle: {
      color: Colors.subtitleText,
      fontSize: 20,
      marginBottom: 20,
    },
    topButton:{
      marginBottom:50
    }
});