import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { TopButton } from '../components/TopButton';
import { CardOption } from '../components/CardOption';
import { Title } from '../components/Title';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/colors';
import { Button } from '../components/Button/Index';
import { CustomTextInput } from '../components/CustomTextInput';
import { ValidationAPI } from '../mock/validationData';

export default function AdressScreen({ navigation }) {
    const [cep, setCep] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [addressProof, setAddressProof] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({
        cep: '',
        cidade: '',
        estado: '',
        addressProof: ''
    });

    const validateForm = () => {
        let isValid = true;
        const newErrors = {
            cep: '',
            cidade: '',
            estado: '',
            addressProof: ''
        };

        if (!cep.trim()) {
            newErrors.cep = 'CEP é obrigatório';
            isValid = false;
        }

        if (!cidade.trim()) {
            newErrors.cidade = 'Cidade é obrigatória';
            isValid = false;
        }

        if (!estado.trim()) {
            newErrors.estado = 'Estado é obrigatório';
            isValid = false;
        }

        if (!addressProof.trim()) {
            newErrors.addressProof = 'É necessário anexar o comprovante de endereço';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async () => {
        if (!validateForm()) {
            return;
        }

        setIsLoading(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Update validation status
            await ValidationAPI.updateValidationStatus('address', true);
            
            // Navigate back
            navigation.goBack();
        } catch (error) {
            Alert.alert(
                'Erro',
                'Não foi possível enviar os dados. Tente novamente.'
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <TopButton iconName="chevron-left" style={styles.topButton} onPress={() => { navigation.goBack() }} />
            <Title>Endereço</Title>
            <Text style={styles.subtitle}>Informe o endereço onde deseja atuar</Text>

            <CustomTextInput
                placeholder="CEP"
                value={cep}
                onChangeText={(text) => {
                    setCep(text);
                    setErrors(prev => ({ ...prev, cep: '' }));
                }}
                keyboardType="numeric"
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
            {errors.estado ? <Text style={styles.errorText}>{errors.estado}</Text> : null}

            <CardOption
                label="Comprovantes de endereço"
                iconSize={50}
                style={styles.fileInput}
                labelStyle={styles.InputText}
                onPress={() => setAddressProof('uploaded')}
            />
            {errors.addressProof ? <Text style={styles.errorText}>{errors.addressProof}</Text> : null}

            <Button
                title={isLoading ? "Enviando..." : "Enviar"}
                onPress={handleSubmit}
                disabled={isLoading}
            />
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
    errorText: {
        color: Colors.errorText,
        marginBottom: 10,
        marginLeft: 10
    },
    fileInput: {
        marginVertical: 10
    },
    InputText: {
        fontSize: 16
    }
});