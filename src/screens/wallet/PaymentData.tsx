import { useState } from "react";
import { ActivityIndicator, Alert, StyleSheet, Text, View } from "react-native";
import { TopButton } from "../../components/TopButton";
import { Title } from "../../components/Title";
import { CustomTextInput } from "../../components/CustomTextInput";
import { CardOption } from "../../components/CardOption";
import { Button } from "../../components/Button/Index";
import Colors from "../../constants/colors";



interface AdressData {
    adressProof: string;
}



export default function PaymentDataScreen({ navigation }) {
    const [bank, setBank] = useState('')
    const [cpf, setCpf] = useState('')
    const [name, setName] = useState('')
    const [pix, setPix] = useState('')

    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({
        bank: '',
        cpf: '',
        name: '',
        pix: '',
    })

    const validateForm = () => {
        let isValid = true
        const newErrors = {
            bank: '',
            cpf: '',
            name: '',
            pix: '',
        }


        if (!bank) {
            newErrors.bank = 'Banco é obrigatório'
            isValid = false
        }

        if (!cpf) {
            newErrors.cpf = 'Cpf é obrigatório'
            isValid = false
        }

        if (!name) {
            newErrors.name = 'Nome é obrigatório'
            isValid = false
        }

        if (!pix) {
            newErrors.pix = 'Pix é obrigatório'
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
            navigation.navigate('Wallet');
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
            <TopButton iconName="chevron-left" style={styles.topButton} onPress={() => navigation.navigate('Wallet')} />

            <Title style={styles.title}>Informe a sua chave pix para recebimento</Title>

            <Text style={styles.subtitle}>Banco
            </Text>
            <CustomTextInput
                placeholder="Digite aqui"
                value={bank}
                onChangeText={(text) => {
                    setBank(text);
                    setErrors(prev => ({ ...prev, Cep: '' }));
                }}
                autoCapitalize="none"
            />

            {errors.bank ? <Text style={styles.errorText}>{errors.bank}</Text> : null}



            <Text style={styles.subtitle}>CPF do titular</Text>
            <CustomTextInput
                placeholder="Digite aqui"
                value={cpf}
                onChangeText={(text) => {
                    setCpf(text);
                    setErrors(prev => ({ ...prev, Cpf: '' }));
                }}
                autoCapitalize="none"
            />
            {errors.cpf ? <Text style={styles.errorText}>{errors.cpf}</Text> : null}


            <Text style={styles.subtitle}>Nome Completo do titular</Text>
            <CustomTextInput
                placeholder="Digite aqui"
                value={name}
                onChangeText={(text) => {
                    setName(text);
                    setErrors(prev => ({ ...prev, Name: '' }));
                }}
                autoCapitalize="none"
            />
            {errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}


            <Text style={styles.subtitle}>Chave PIX</Text>
            <CustomTextInput
                placeholder="Digite aqui"
                value={pix}
                onChangeText={(text) => {
                    setPix(text);
                    setErrors(prev => ({ ...prev, Pix: '' }));
                }}
                autoCapitalize="none"
            />
            {errors.pix ? <Text style={styles.errorText}>{errors.pix}</Text> : null}



            <Button
                title="Salvar"
                onPress={handleSubmit}
                style={styles.button}

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
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: 22,
        marginBottom: 20,
    },
    topButton: {
        marginTop: 30,
        marginBottom: 0,
        marginLeft: -20,
    },
    title: {
        marginTop: 80,
        fontSize: 40,
        marginBottom: 30,
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
        marginBottom: 5,
        fontSize: 14,
    },

    loader: {
        marginTop: 15,
        marginBottom: 20
    },
    button: {
        position: 'absolute',
        width: '100%',
        alignSelf: 'center',
        bottom: 30,
        paddingVertical: 25
    }
});