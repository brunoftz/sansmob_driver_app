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
import DriverMenuScreen from '../screens/DriverMenu';
import TravelSuccessScreen from '../screens/TravelSuccess';
import UserProfileScreen from '../screens/profile/UserProfile';
import LanguagesScreen from '../screens/profile/Languages';
import CityScreen from '../screens/profile/City';
import WalletScreen from '../screens/wallet/Wallet';

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: Colors.bgDark }
        }}
      >
        
        {/* data validation screens */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DataValidation" component={DataValidationScreen} />
        <Stack.Screen name="LegalAccords" component={LegalAccordsScreen} />
        <Stack.Screen name="Conditions" component={ConditionsScreen} />
        <Stack.Screen name="Adress" component={AdressScreen} />
        <Stack.Screen name="PersonalData" component={PersonalDataScreen} />


        {/* map screens */}
        <Stack.Screen name="MapHome" component={MapHomeScreen} />
        <Stack.Screen name="DriverMenu" component={DriverMenuScreen}
          options={{
            headerShown: false,
            gestureEnabled: true,
          }} />

        {/* Profile screens */}
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
        <Stack.Screen name="Languages" component={LanguagesScreen} />
        <Stack.Screen name="City" component={CityScreen} />
        <Stack.Screen name="TravelSuccess" component={TravelSuccessScreen}
          options={{
            animation: 'fade', // isso já aplica uma transição de opacidade
          }} />

        <Stack.Screen name="Wallet" component={WalletScreen}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
} 