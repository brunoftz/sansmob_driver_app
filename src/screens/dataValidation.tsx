import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TopButton } from '../components/TopButton';
import { CardOption } from '../components/CardOption';
import { Title } from '../components/Title';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/colors';



export default function DataValidationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TopButton iconName="chevron-left" style={styles.topButton}onPress={() => {navigation.goBack() /* open drawer or menu */ }} />
      <Title>Validação dados pessoais</Title>
      <Text style={styles.subtitle}>
        Preencha as etapas obrigatórias para trabalhar conosco.
      </Text>
      <CardOption
        label="Dados pessoais"
        iconComponent={MaterialCommunityIcons}
        iconName="chevron-right"
        iconColor="white"
        iconSize={50}
        onPress={()=>{navigation.navigate('PersonalData')}}/>


      <CardOption
        label="Acordos legais"
        iconComponent={MaterialCommunityIcons}
        iconName="chevron-right"
        iconColor="white"
        iconSize={50}
        onPress={()=>{navigation.navigate('LegalAccords')}}/>

  
      <CardOption
        label="Endereço"
        iconComponent={MaterialCommunityIcons}
        iconName="chevron-right"
        iconColor="white"
        iconSize={50}
        onPress={()=>{navigation.navigate('Adress')}}
        />


        
      <CardOption
        label="Aceite de condições"
        iconComponent={MaterialCommunityIcons}
        iconName="chevron-right"
        iconColor="white"
        onPress={()=>{navigation.navigate('Conditions')}}
        iconSize={50}/>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.bgDark,
      padding: 44,
      justifyContent: 'flex-start',
    },
    subtitle: {
      color: Colors.subtitleText,
      fontSize: 20,
      marginBottom: 20,
    },
    topButton:{
      marginTop:30,
      marginBottom:0,
      marginLeft:-20
    }
});