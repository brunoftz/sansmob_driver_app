import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { TopButton } from '../components/TopButton';
import { CardOption } from '../components/CardOption';
import { Title } from '../components/Title';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/colors';
import { Button } from '../components/Button/Index';
import { CustomTextInput } from '../components/CustomTextInput';



interface PersonalDataData {
    cnhProof: string;
}



export default function PersonalDataScreen({ navigation }) {
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [dataNasc, setDatanasc] = useState('')

    const [cnhProof, setCnhProof] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({
        nome: '',
        cpf: '',
        dataNasc: '',
    })

    const validateForm = () => {
        let isValid = true
        const newErrors = {
            nome: '',
            cpf: '',
            dataNasc: '',
        }


        if (!nome) {
            newErrors.nome = 'Nome é obrigatório'
            isValid = false
        }

        if (!cpf) {
            newErrors.cpf = 'CPF é obrigatório'
            isValid = false
        }

        if (!dataNasc) {
            newErrors.dataNasc = 'Data de nascimento é obrigatória'
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
                'Não foi possível salvar os dados. Tente novamente.'
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <TopButton iconName="chevron-left" style={styles.topButton} onPress={() => { navigation.goBack() /* open drawer or menu */ }} />
            <Title>Preencha suas informações pessoais</Title>
            {/* <Text style={styles.subtitle}></Text> */}


            <CustomTextInput
                placeholder="[name]"
                value={nome}
                onChangeText={(text) => {
                    setNome(text);
                    setErrors(prev => ({ ...prev, nome: '' }));
                }}
            />

            {errors.nome ? <Text style={styles.errorText}>{errors.nome}</Text> : null}

            <CustomTextInput
                placeholder="CPF"
                value={cpf}
                onChangeText={(text) => {
                    setCpf(text);
                    setErrors(prev => ({ ...prev, cpf: '' }));
                }}
            />
            /{errors.cpf ? <Text style={styles.errorText}>{errors.cpf}</Text> : null}

            <CustomTextInput
                placeholder="Data de nascimento"
                value={dataNasc}
                onChangeText={(text) => {
                    setDatanasc(text);
                    setErrors(prev => ({ ...prev, dataNasc: '' }));
                }}
            />
            {errors.dataNasc ? <Text style={styles.errorText}>{errors.dataNasc}</Text> : null}



            <CardOption
                label="Foto frente e verso da CNH"
                iconSize={50}
                style={styles.fileInput}
                labelStyle={styles.InputText}
            />

            <CardOption
                label="Foto de perfil"
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