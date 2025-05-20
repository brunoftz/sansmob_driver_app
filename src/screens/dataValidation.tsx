import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TopButton } from '../components/TopButton';
import { CardOption } from '../components/CardOption';
import { Title } from '../components/Title';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/colors';
import { ValidationAPI, ValidationStatus } from '../mock/validationData';
import { useIsFocused } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  DataValidation: undefined;
  PersonalData: undefined;
  LegalAccords: undefined;
  Adress: undefined;
  Conditions: undefined;
  RegistrationUnderAnalysisScreen: undefined;
  DriverMenu: undefined; // Assuming DriverMenu is also in the stack
};

type DataValidationScreenNavigationProp = StackNavigationProp<RootStackParamList, 'DataValidation'>;

interface DataValidationScreenProps {
  navigation: DataValidationScreenNavigationProp;
}

export default function DataValidationScreen({ navigation }: { navigation: any }) {
  const [validationStatus, setValidationStatus] = useState<ValidationStatus>({
    personalData: false,
    legalAccords: false,
    address: false,
    conditions: false
  });
  const isFocused = useIsFocused();

  useEffect(() => {
    const checkValidationStatus = async () => {
      if (isFocused) {
        const status = await ValidationAPI.getValidationStatus();
        setValidationStatus(status);
        
        // Check if all validations are complete
        const isComplete = await ValidationAPI.isAllValidated();
        if (isComplete) {
          navigation.navigate('RegistrationUnderAnalysis');
        }
      }
    };

    checkValidationStatus();
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <TopButton iconName="chevron-left" style={styles.topButton} onPress={() => { navigation.goBack() }} />
      <Title>Validação dados pessoais</Title>
      <Text style={styles.subtitle}>
        Preencha as etapas obrigatórias para trabalhar conosco.
      </Text>
      <CardOption
        label="Dados pessoais"
        iconComponent={MaterialCommunityIcons}
        iconName={validationStatus.personalData ? "check-circle" : "chevron-right"}
        iconColor={validationStatus.personalData ? "#4CAF50" : "white"}
        iconSize={50}
        onPress={() => { navigation.navigate('PersonalData') }}
      />

      <CardOption
        label="Acordos legais"
        iconComponent={MaterialCommunityIcons}
        iconName={validationStatus.legalAccords ? "check-circle" : "chevron-right"}
        iconColor={validationStatus.legalAccords ? "#4CAF50" : "white"}
        iconSize={50}
        onPress={() => { navigation.navigate('LegalAccords') }}
      />

      <CardOption
        label="Endereço"
        iconComponent={MaterialCommunityIcons}
        iconName={validationStatus.address ? "check-circle" : "chevron-right"}
        iconColor={validationStatus.address ? "#4CAF50" : "white"}
        iconSize={50}
        onPress={() => { navigation.navigate('Adress') }}
      />

      <CardOption
        label="Aceite de condições"
        iconComponent={MaterialCommunityIcons}
        iconName={validationStatus.conditions ? "check-circle" : "chevron-right"}
        iconColor={validationStatus.conditions ? "#4CAF50" : "white"}
        iconSize={50}
        onPress={() => { navigation.navigate('Conditions') }}
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
  }
});