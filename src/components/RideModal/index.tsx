// components/ModalContent.js
import React from 'react';
import { View, Text, ActivityIndicator, Stylesheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/colors';
import { s } from './style';
import { Button } from '../Button/Index';
import { CardOption } from '../CardOption';

export function ModalContent({
    modalStep,
    setModalStep,
    simulateRouteLoading,
    countdown,
    showSuccessScreen,
}) {
    if (modalStep === 'route') {
        return (
            <>
                <Text style={s.modalTitle}>[R$ 1.234,56]</Text>
                <Text style={s.modalTime}>À 5 minutos</Text>

                <View style={s.rideInfoContainer}>
                    <View style={s.rideRow}>
                        <View style={s.point} />
                        <Text style={s.addressText}>Rua Abial do Amaral Carneiro, 123, Enseada do Suá</Text>
                    </View>
                    <View style={s.rideRow}>
                        <View style={s.verticalLine} />
                        <Text style={s.addressText}>Viagem de 15 minutos</Text>
                    </View>
                    <View style={s.rideRow}>
                        <View style={s.squarePoint} />
                        <Text style={s.addressText}>Av. Fernando Ferrari, 456, Goiabeiras</Text>
                    </View>
                </View>

                <Button title="Aceitar" onPress={() => setModalStep('apps')} style={s.acceptButton} />
            </>
        );
    }

    if (modalStep === 'apps') {
        return (
            <>
                <Text style={s.modalTitle}>Prosseguir com:</Text>
                <Button
                    title="Waze"
                    style={[s.appButton, { backgroundColor: '#00B8F4' }]}
                    textStyle={s.appButtonText}
                    onPress={simulateRouteLoading}
                />
                <Button
                    title="Google Maps"
                    style={[s.appButton, { backgroundColor: '#34A853' }]}
                    textStyle={s.appButtonText}
                    onPress={simulateRouteLoading}
                />
            </>
        );
    }

    if (modalStep === 'loading') {
        return (
            <>
                <Text style={s.modalTitle}>Carregando rota...</Text>
                <View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 20, marginTop: 90 }}>
                    <ActivityIndicator size="90" color="#fff" />
                </View>
            </>
        );
    }

    if (modalStep === 'done') {
        return (
            <>
                <Text style={s.modalTitle}>Chegou no destino</Text>
                <View style={s.rideArrival}>
                    <View style={s.squarePoint} />
                    <Text style={s.addressText}>Destino: Rua Abiail do Amaral Carneiro, 123, Enseada do Suá</Text>
                </View>
                <CardOption
                    label= "Falar com Nayara"
                    style={s.chatCard}
                    iconComponent={MaterialCommunityIcons}
                    iconName="chat-processing"
                    onPress={() => setModalStep('travel')}
                    iconColor="white"
                />
                <Button title="Cancelar" style={s.acceptButton} />
            </>
        );
    }

    if (modalStep === 'travel') {
        return (
            <>
                <Text style={s.subtitle}>01 min</Text>
                <Text style={s.travelModalTitle}>Viagem com</Text>
                <Text style={s.travelModalTitle}>Nayara</Text>
                <Button title="Encerrar" style={s.stopButton} />
            </>
        );
    }

    if (modalStep === 'finished') {
        if (showSuccessScreen) return null;
        return (
            <>
                <Text style={s.modalTitle}>Chegou no destino</Text>
                <Text style={s.modalTime}>{countdown.toString().padStart(2, '0')} seg</Text>
            </>
        );
    }

    return null;
}

