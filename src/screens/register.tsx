import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import { Title } from '../components/Title'
import { CustomTextInput } from '../components/CustomTextInput'
import { Button } from '../components/Button/Index'
import Icon from 'react-native-vector-icons/Feather'
import { TopButton } from '../components/TopButton'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import Colors from '../constants/colors'


interface RegisterData{
    email: string
    nome: string
    sobrenome: string
    senha: string
    checkSenha: string
}

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [senha, setSenha] = useState('')
  const [checkSenha, setcheckSenha] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showcheckSenha, setShowcheckSenha] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    email:'',
    nome: '',
    sobrenome: '',
    senha:'',
    checkSenha: '',
  })

  
    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    
    const validateForm = () => {
        let isValid = true
        const newErrors = {
            email:'',
            nome: '',
            sobrenome: '',
            senha:'',
            checkSenha: '',
        }



    if (!email) {
        newErrors.email = 'Email é obrigatório'
        isValid = false
      } else if (!validateEmail(email)) {
        newErrors.email = 'Email inválido'
        isValid = false
      }
  
      if (!senha) {
        newErrors.senha = 'Senha é obrigatória'
        isValid = false
      } else if (senha.length < 6) {
        newErrors.senha = 'A senha deve ter pelo menos 6 caracteres'
        isValid = false
      } else if (senha != checkSenha){
        newErrors.senha = 'A senha e a confirmação devem ser iguais'
      }

      if(!nome){
        newErrors.nome = 'Nome é obrigatório'
      }
      if(!sobrenome){
        newErrors.sobrenome='Sobrenome é obrigatório'
      }

      setErrors(newErrors)
      return isValid
    }

    const prepareRegisterData = (): RegisterData =>{
        return {
      nome: nome,
      sobrenome: sobrenome,
      email: email.trim().toLowerCase(),
      senha: senha,
      checkSenha: checkSenha
        }
    }

    const handleRegister = async ()=>{
        if(!validateForm()){
            return
        }

        setIsLoading(true)
  


    try {
        const registerData = prepareRegisterData()
        
        // Aqui seria adicionada a chamada à api.

        // Simulando delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Simulando login bem-sucedido
        navigation.navigate('Login')
    } catch (error) {
        Alert.alert(
            'Erro',
            'Não foi possível realizar o cadastro, tente novamente.'
        )
    } finally {
        setIsLoading(false)

    }
    }

    return (
    
    <View style={styles.container}>

      <TopButton onPress={() => navigation.goBack()} style={{ marginLeft: -18 }} />

      <Title style={styles.title}>Criar conta</Title>
      <Text style={styles.subtitle}>Let's get started by filling out the form below.</Text>

      <CustomTextInput
        placeholder="Email"
        value={email}
        onChangeText={(text)=>{
            setEmail(text);
            setErrors(prev => ({ ...prev, email: '' }));
        }}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
      <CustomTextInput
        placeholder="Nome"
        value={nome}
        onChangeText={(text) => {
            setNome(text);
            setErrors(prev => ({ ...prev, nome: '' }));
          }}
      />
      {errors.nome ? <Text style={styles.errorText}>{errors.senha}</Text> : null}

      <CustomTextInput
        placeholder="Sobrenome"
        value={sobrenome}
        onChangeText={(text) => {
            setSobrenome(text);
            setSobrenome(prev => ({ ...prev, so: '' }));
          }}
      />
      {errors.sobrenome ? <Text style={styles.errorText}>{errors.senha}</Text> : null}


      <CustomTextInput
        placeholder="Senha"
        value={senha}
        onChangeText={(text) => {
            setSenha(text);
            setErrors(prev => ({ ...prev, senha: '' }));
          }}
        isPassword
        showPassword={showPassword}
        onTogglePassword={() => setShowPassword(!showPassword)}
      />
      {errors.senha ? <Text style={styles.errorText}>{errors.senha}</Text> : null}


      <CustomTextInput
        placeholder="Confirmar senha"
        value={checkSenha}
        
        onChangeText={(text) => {
            setcheckSenha(text);
            setErrors(prev => ({ ...prev, checkSenha: '' }));
          }}
        isPassword
        showPassword={showcheckSenha}
        onTogglePassword={() => setShowcheckSenha(!showcheckSenha)}
      />
      {errors.checkSenha ? <Text style={styles.errorText}>{errors.senha}</Text> : null}

      <Button title={isLoading ? "Cadastrando..." : "Criar Conta"} 
      onPress={handleRegister}
      disabled={isLoading} />
      
      <Text style={styles.footerText}>
        Já tem uma conta?
        <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}> Faça login aqui</Text>
      </Text>

      
      {isLoading && (
        <ActivityIndicator
          size="large" 
          color={Colors.primaryBlue}
          style={styles.loader}
        />
      )}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgDark,
    padding: 44,
    justifyContent: 'flex-start',
  },
  backButton: {
    marginBottom: 10,
  },
  title: {
    marginBottom: 0,
  },
  subtitle: {
    color: Colors.subtitleText,
    fontSize: 20,
    marginBottom: 20,
  },
  footerText: {
    color: Colors.subtitleText,
    textAlign: 'center',
    marginTop: 16,
    fontSize: 20,
  },
  loginLink: {
    color: Colors.primaryBlue,
    fontWeight: 'bold',
  },
  
  errorText: {
    color: Colors.errorText,
    marginTop: -15,
    marginBottom: 15,
    fontSize: 14,
  },
  loader: {
    marginTop: 15,
    marginBottom:20
  }
})