import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TopButton } from '../components/TopButton';
import { CardOption } from '../components/CardOption';
import { Title } from '../components/Title';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/colors';



export default function DriverMenuScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TopButton iconName="menu" style={styles.topButton}onPress={() => { /* open drawer or menu */ }} />
      <CardOption
        style={styles.cards}
        label="Home"
        onPress={()=>{navigation.navigate('DataValidation')}}/>


      <CardOption
        style={styles.cards}
        label="Carteira"
        onPress={()=>{navigation.navigate('MapHome')}}>
        </CardOption>

  
      <CardOption
        style={styles.cards}
        label="Perfil"
        onPress={()=>{navigation.navigate('UserProfile')}}/>

        
      <CardOption
        style={styles.cardExit}
        iconComponent={MaterialCommunityIcons}
        iconName="arrow-left"
        iconColor='white'
        iconPosition='left'
        label=" Sair"/>

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
    cards:{
        paddingVertical:25
    },
    cardExit:{
        paddingVertical:25,
        marginTop:400,
        justifyContent:'flex-start',
        
    },
    subtitle: {
      color: Colors.subtitleText,
      fontSize: 20,
      marginBottom: 20,
    },
    topButton:{
      marginBottom:50,
      alignSelf:'flex-end'
    }
});