import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TopButton } from '../../components/TopButton';
import { Title } from '../../components/Title';
import Colors from '../../constants/colors';
import { defaultStyle } from '../../constants/defaultStyles';
import { Button } from '../../components/Button/Index';
import { CityAPI } from '../../mock/cityData'; // Import the CityAPI

const CustomPicker = ({ label, items, selectedValue, onValueChange }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.pickerContainer}>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.picker}>
                <Text style={styles.pickerText}>{selectedValue || label}</Text>
                <MaterialCommunityIcons name="chevron-down" size={40} color="#fff" />
            </TouchableOpacity>

            <Modal
                transparent={true}
                visible={modalVisible}
                animationType="slide"
            >
                <View style={styles.modalContainer}>
                    <FlatList
                        data={items}
                        keyExtractor={(item) => item}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.item}
                                onPress={() => {
                                    onValueChange(item);
                                    setModalVisible(false);
                                }}
                            >
                                <Text style={styles.itemText}>{item}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </Modal>
        </View>
    );
};

export default function CityScreen({ navigation }: { navigation: any }) {
    const [selectedState, setSelectedState] = useState<string>('');
    const [selectedCity, setSelectedCity] = useState<string>('');

    const states = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais']; // Exemplo de estados
    const cities = {
        'São Paulo': ['São Paulo', 'Campinas', 'Santos'],
        'Rio de Janeiro': ['Rio de Janeiro', 'Niterói', 'Petrópolis'],
        'Minas Gerais': ['Belo Horizonte', 'Uberlândia', 'Ouro Preto'],
    };

    // Fetch current city data when the component mounts
    useEffect(() => {
        const fetchCityData = async () => {
            const cityData = await CityAPI.getCity();
            setSelectedCity(cityData.city); // Set the selected city from the API
            const stateData = await CityAPI.getState();
            setSelectedState(stateData.state);
        };

        fetchCityData();
    }, []);

    // Update city data when the user selects a new city
    const handleCityChange = async (city: string) => {
        setSelectedCity(city);
        await CityAPI.updateCity(city); // Update the city in the API
    };
    const handleStateChange = async (state: string) => {
        setSelectedState(state);
        await CityAPI.updateState(state); // Update the city in the API
        setSelectedState(state)
    };

    return (
        <View style={defaultStyle.container}>

            <TopButton iconName="chevron-left" style={styles.topButton} onPress={()=>{}} />

            <Title style={styles.title}>Em qual estado você nasceu?</Title>
            <CustomPicker
                label="Estado"
                items={states}
                selectedValue={selectedState}
                onValueChange={handleStateChange}
            />

            <CustomPicker
                label="Cidade"
                items={selectedState ? cities[selectedState] : []}
                selectedValue={selectedCity}
                onValueChange={handleCityChange}
            />

            <Button
                title="Salvar"
                onPress={() => {
                    console.log("Cidade selecionada:", selectedCity);
                    navigation.navigate('UserProfile', { city: selectedCity });
                }}
                style={styles.button}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#000',
        borderRadius:16
    },
    pickerContainer: {
        marginBottom: 20,
        backgroundColor:Colors.primaryDark,
        borderRadius:16
    },
    picker: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor:Colors.primaryDark,
        paddingVertical:30,
        borderRadius:16
    },
    pickerText: {
        color: '#fff',        
        fontSize: 24,
        marginLeft:20
    },
    modalContainer: {
        flex: 1,
        backgroundColor: '#000',
        padding: 20,
        fontSize: 24,
    },
    item: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: Colors.primaryDark,
        borderRadius:19,
        fontSize: 24,
    },
    itemText: {
        color: '#fff',
        fontSize: 24,
    },
    saveButton: {marginTop:450,
        backgroundColor: Colors.primaryBlue,
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 24,
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
    button:{
      position:'absolute',
      width:'100%',
      alignSelf:'center',
      bottom:70,
      paddingVertical:25
    }
});