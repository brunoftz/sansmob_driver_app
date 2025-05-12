import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { TopButton } from '../components/TopButton';
import { CardOption } from '../components/CardOption';
import { Title } from '../components/Title';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/colors';
import { Button } from '../components/Button/Index';



//interface LegalAccordsData {}



export default function LegalAccordsScreen({ navigation }) {

    const [criminalRecords, setCriminalRecords] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async () => {
        // if (!validateForm()) {
        //   return;
        // }

        setIsLoading(true);

        try {
            //   const loginData = prepareLoginData();
            // Aqui seria adicionada a chamada à api.


            // Simulando delay, já que ainda não há lógica de autenticação
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Simulando login bem-sucedido
            navigation.navigate('DataValidation');
        } catch (error) {
            Alert.alert(
                'Erro',
                'Não foi possível fazer login. Tente novamente.'
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <TopButton iconName="chevron-left" style={styles.topButton} onPress={() => { navigation.goBack() /* open drawer or menu */ }} />
            <Title>Acordo legal</Title>
            <Text style={styles.subtitle}>
                Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since
                the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type
                specimen book. It has survived not only five
                centuries, but also the leap into electronic
                typesetting, remalning essentially unchanged. It
                was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop
                publishing software like Aldus PageMaker
                Including versions of Lorem Ipsum.
            </Text>
            <CardOption
                label="Comprovantes de antecedentes criminais"
                iconSize={50}
                style={styles.fileInput}
                labelStyle={styles.InputText}
            />
            <Button
                title={isLoading ? "Enviando..." : "Enviar"}
                onPress={handleSubmit}
                disabled={isLoading}></Button>

            {isLoading && (
                <ActivityIndicator
                    size="large"
                    color={Colors.primaryBlue}
                    style={styles.loader}
                />
            )}

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
    topButton: {
        marginTop: 30,
        marginBottom: 0,
        marginLeft: -20
    },
    fileInput: {
        textAlign: 'center',
        flexDirection: 'column',
    },
    InputText: {
        color: Colors.subtitleText
    },

    loader: {
        marginTop: 15,
        marginBottom: 20
    }
});