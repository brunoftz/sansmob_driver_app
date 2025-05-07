import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Alert
} from 'react-native';
import { CustomTextInput } from '../components/CustomTextInput';
import { Title } from '../components/Title';
import { Button } from '../components/Button/Index';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Register: undefined;
};

type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

interface LoginData {
  email: string;
  senha: string;
}

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    senha: ''
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      email: '',
      senha: ''
    };
    if (!email) {
      newErrors.email = 'Email é obrigatório';
      isValid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = 'Email inválido';
      isValid = false;
    }

    if (!senha) {
      newErrors.senha = 'Senha é obrigatória';
      isValid = false;
    } else if (senha.length < 6) {
      newErrors.senha = 'A senha deve ter pelo menos 6 caracteres';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const prepareLoginData = (): LoginData => {
    return {
      email: email.trim().toLowerCase(),
      senha: senha
    };
  };

  const handleLogin = async () => {
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      const loginData = prepareLoginData();
      // Aqui seria adicionada a chamada à api.

      
      // Simulando delay, já que ainda não há lógica de autenticação
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulando login bem-sucedido
      navigation.navigate('Home');
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
      <Title>Seja Bem-vindo!</Title>

      <CustomTextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          setErrors(prev => ({ ...prev, email: '' }));
        }}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

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

      <Button 
        title={isLoading ? "Entrando..." : "Login"}
        onPress={handleLogin}
        disabled={isLoading}
      />


      <Text style={styles.footerText}>
        Você não tem cadastro?
        <Text style={styles.registerText} onPress={() => navigation.navigate('Register')}>
          {' '}Cadastre-se.
        </Text>
      </Text>

      
      {isLoading && (
        <ActivityIndicator 
          size="large" 
          color="#0056FF" 
          style={styles.loader}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14181B',
    padding: 44,
    justifyContent: 'center',
  },
  footerText: {
    color: '#ccc',
    textAlign: 'left',
    fontSize: 20
  },
  registerText: {
    color: '#0056FF',
    fontWeight:'bold',
  },
  errorText: {
    color: '#ff4444',
    marginTop: -15,
    marginBottom: 15,
    fontSize: 14,
  },
  loader: {
    marginTop: 15,
    marginBottom:20
  }
});