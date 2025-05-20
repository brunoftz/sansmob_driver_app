import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, ActivityIndicator, TouchableOpacity } from 'react-native';
import { TopButton } from '../components/TopButton';
import { CardOption } from '../components/CardOption';
import { Title } from '../components/Title';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/colors';
import { Ionicons } from '@expo/vector-icons'; // ou use outro ícone
import { Button } from '../components/Button/Index';
import { ValidationAPI } from '../mock/validationData';

// interface ConditionsData {}

export default function ConditionsScreen({ navigation }) {
    const [isChecked, setIsChecked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({
        terms: ''
    });

    const validateForm = () => {
        let isValid = true;
        const newErrors = {
            terms: ''
        };

        if (!isChecked) {
            newErrors.terms = 'Você precisa aceitar os termos e condições';
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
            await ValidationAPI.updateValidationStatus('conditions', true);
            
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
            <TopButton iconName="chevron-left" style={styles.topButton} onPress={() => { navigation.goBack() /* open drawer or menu */ }} />
            <Title>Termos e condições</Title>
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
            
            <TouchableOpacity onPress={() => setIsChecked(!isChecked)} style={styles.checkBoxcontainer}>
                <View style={[styles.checkbox, isChecked && styles.checked]}>
                    {isChecked && <Ionicons name="checkmark" size={23} color="white" />}
                </View>
                <Text style={styles.text}>
                    Eu aceito todos os termos e condições
                </Text>
            </TouchableOpacity>

            {errors.terms ? <Text style={styles.errorText}>{errors.terms}</Text> : null}

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

    checkBoxcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:12,
        marginLeft:14,
        marginBottom:28
    },
    checkbox: {
        width: 25,
        height: 25,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 4,
        marginRight: 8,
    },
    checked: {
        backgroundColor: Colors.primaryBlue,
        borderColor: Colors.primaryBlue,
    },
    text: {
        color: '#fff', 
        fontSize: 18,
    },
    linkText: {
        color: Colors.primaryBlue,
        fontWeight: 'bold',
    },

    loader: {
        marginTop: 15,
        marginBottom: 20
    },
    errorText: {
        color: Colors.errorText,
        marginBottom: 10,
        marginLeft: 10
    }
});