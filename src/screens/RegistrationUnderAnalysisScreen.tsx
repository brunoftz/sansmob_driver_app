import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/colors';
import { CardOption } from '../components/CardOption';
import { Title } from '../components/Title';

export default function RegistrationUnderAnalysisScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.iconCircle}>
                    <MaterialCommunityIcons name="clock-outline" size={60} color={Colors.white} />
                </View>
                <Title style={styles.title}>Cadastro Em Análise</Title>
                <Text style={styles.subtitle}>
                    Informações enviadas com sucesso!
                    Aguarde a aprovação do seu perfil
                    pelos administradores.
                </Text>
            </View>

            <CardOption
                label="Sair"
                iconComponent={MaterialCommunityIcons}
                iconName="arrow-left"
                iconColor="white"
                iconPosition="left"
                style={styles.exitButton}
                onPress={() => navigation.goBack()} // Or navigation.navigate('Login') or similar
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bgDark,
        padding: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignContent:'center',
        alignItems: 'center',
    },
    iconCircle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: Colors.primaryDark,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    title: {
        fontSize: 28,
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        color: Colors.subtitleText,
        fontSize: 18,
        fontWeight:'bold',
        textAlign: 'center',
        lineHeight: 24,
    },
    exitButton:{
        paddingVertical:25,
        marginTop:400,
        justifyContent:'flex-start',
        width:'100%'
        
    },
}); 