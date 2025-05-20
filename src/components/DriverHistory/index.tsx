import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../../constants/colors';
import { s } from './style';

const DATA=[
    {
        'id':1,
        'value':'17,69',
        'destination':'Jd. Ana Maria',
        'date': '01/20/2025'
    },
    {
        'id':2,
        'value':'21,91',
        'destination':'Jd. Lucia Rossa',
        'date': '01/20/2025'
    }
]

const Item = ({ value, destination, date}) =>(
    
    <View style={s.item}>

        <View style={s.iconContainer}>
            <MaterialCommunityIcons name="plus-circle" size={28} color={Colors.primaryBlue}/>
        </View>

        <View style={s.infoContainer}>
            <Text style={s.value}>R${value}</Text>
            <Text style={s.destination}>{destination}</Text>
        </View>

        <Text style={s.date}>{date}</Text>
    </View>
);

export default function DriverHistory(){
    return(
        <FlatList
            data={DATA}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) =>(
                <Item value={item.value} destination={item.destination} date={item.date} />

            )} 

            ListHeaderComponent={<Text style={s.header}>Extrato</Text>}
            contenctContainerStyle={s.container}
            />
    )
}