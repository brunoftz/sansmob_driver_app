import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/login';
import RegisterScreen from '../screens/register';
import HomeScreen from '../screens/home';
import DataValidationScreen from '../screens/dataValidation';
import Colors from '../constants/colors';
import LegalAccordsScreen from '../screens/legalAccords';
import ConditionsScreen from '../screens/conditions';
import AdressScreen from '../screens/Adress';
import PersonalDataScreen from '../screens/personalData';
import MapHomeScreen from '../screens/MapHome';

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: Colors.bgDark }
        }}
      >
        
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DataValidation" component={DataValidationScreen} />
        <Stack.Screen name="LegalAccords" component={LegalAccordsScreen}/>
        <Stack.Screen name="Conditions" component={ConditionsScreen}/>
        <Stack.Screen name="Adress" component={AdressScreen}/>
        <Stack.Screen name="PersonalData" component={PersonalDataScreen}/>
        <Stack.Screen name="MapHome" component={MapHomeScreen}/>

        
      </Stack.Navigator>
    </NavigationContainer>
  );
} 