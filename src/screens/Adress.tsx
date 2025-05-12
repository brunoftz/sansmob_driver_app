import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { TopButton } from '../components/TopButton';
import { CardOption } from '../components/CardOption';
import { Title } from '../components/Title';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/colors';
import { Button } from '../components/Button/Index';
import { CustomTextInput } from '../components/CustomTextInput';



interface AdressData {
    adressProof: string;
}



export default function AdressScreen({ navigation }) {
    const [cep, setCep] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')

    const [adressProof, setAdressProof] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({
        cep: '',
        cidade: '',
        estado: '',
    })

    const validateForm = () => {
        let isValid = true
        const newErrors = {
            cep: '',
            cidade: '',
            estado: '',
        }


        if (!cep) {
            newErrors.cep = 'Cep é obrigatório'
            isValid = false
        }

        if (!cidade) {
            newErrors.cidade = 'Cidade é obrigatório'
            isValid = false
        }

        if (!estado) {
            newErrors.estado = 'Estado é obrigatório'
            isValid = false
        }

        setErrors(newErrors)
        return isValid
    }

    const handleSubmit = async () => {
        if (!validateForm()) {
            return;
        }

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
                'Não foi possível salvar o endereço. Tente novamente.'
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <TopButton iconName="chevron-left" style={styles.topButton} onPress={() => { navigation.goBack() /* open drawer or menu */ }} />
            <Title>Endereço</Title>
            <Text style={styles.subtitle}>Informe o endereço onde deseja atuar
            </Text>


            <CustomTextInput
                placeholder="Cep"
                value={cep}
                onChangeText={(text) => {
                    setCep(text);
                    setErrors(prev => ({ ...prev, Cep: '' }));
                }}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            {errors.cep ? <Text style={styles.errorText}>{errors.cep}</Text> : null}
            
            <CustomTextInput
                placeholder="Cidade"
                value={cidade}
                onChangeText={(text) => {
                    setCidade(text);
                    setErrors(prev => ({ ...prev, cidade: '' }));
                }}
            />
            {errors.cidade ? <Text style={styles.errorText}>{errors.cidade}</Text> : null}
            
            <CustomTextInput
                placeholder="Estado"
                value={estado}
                onChangeText={(text) => {
                    setEstado(text);
                    setErrors(prev => ({ ...prev, estado: '' }));
                }}
            />
            {errors.cidade ? <Text style={styles.errorText}>{errors.cidade}</Text> : null}
            


            <CardOption
                label="Comprovantes de endereço"
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
        color: Colors.subtitleText,
        fontWeight: 'regular',
    },

    errorText: {
        color: Colors.errorText,
        marginTop: -15,
        marginBottom: 15,
        fontSize: 14,
    },

    loader: {
        marginTop: 15,
        marginBottom: 20
    }
});