// src/screens/profile/UserProfile.tsx

import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { defaultStyle } from "../../constants/defaultStyles";
import { TopButton } from "../../components/TopButton";
import { CardOption } from "../../components/CardOption";
import Colors from "../../constants/colors";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Title } from "../../components/Title";
import DriverHistory from "../../components/DriverHistory";


export default function WalletScreen({ navigation }) {
  return (
    <View style={styles.OuterContainer}>
    <View style={defaultStyle.container}>
      <TopButton iconName="chevron-left" style={styles.topButton} onPress={() => { navigation.navigate('DriverMenu'); }} />
      
      <View style={styles.header}>
      <View style={styles.topinfo}>
        <MaterialCommunityIcons name='wallet'  size={32} color={Colors.primaryBlue} />
        <Text style={styles.headerText}>Carteira</Text>
      </View>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>R$2.915,60</Text>
        <Text style={styles.balanceLabel}>Saldo disponível</Text>
      </View>
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.statsContainer}>
          
        <TouchableOpacity onPress={() => { navigation.navigate('PaymentData'); }} style={styles.stat}>
          <MaterialCommunityIcons name='credit-card'  size={32} color={Colors.primaryBlue} />
          <Text style={styles.statLabel}>Dados de pagamento</Text>
        </TouchableOpacity>
          <TouchableOpacity onPress={() => { /* Add navigation for the second stat here */ }} style={styles.stat}>
          <MaterialCommunityIcons name='chart-timeline-variant-shimmer'  size={32} color={Colors.primaryBlue} />
            <Text style={styles.statLabel}>Dashboard financeiro</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
      <DriverHistory></DriverHistory>

    </View>
  );
}

const styles = StyleSheet.create({

  OuterContainer:{
      flex: 1,
      
  },

  topinfo:{
    flexDirection:'row',
    gap:10,
    marginTop:30,
  },
  header:{
    marginTop:30,
  },
  headerText:{
    color:Colors.white,
    fontSize:23,
    fontWeight:'bold',
  },
  topButton: {
    marginTop: 30, 
    marginLeft: -20,
  },
  profileContainer: {
    alignItems: 'center',
    zIndex:10
  },
  profileImage: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: Colors.primaryDark,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color: Colors.white,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems:'flex-start',
    width: '100%',
    marginVertical: 20,
    gap:25,
  },
  stat: {
    alignItems: 'center',
    backgroundColor: Colors.primaryDark,
    width:150,
    height:150,
    justifyContent:'center',
    borderRadius: 30,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.white,
  },
  statLabel: {
    fontSize: 18,
    color: Colors.white,
    textAlign:'center',
    alignSelf:'center'
  },
  cardEdit: {
    paddingVertical: 25,
    paddingLeft: 20,
    justifyContent: 'flex-start',
  },
  balanceContainer: {
    alignItems: 'flex-start',
    gap:10
  },
  balanceText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.white,
  },
  balanceLabel: {
    fontSize: 18,
    color: Colors.white,
  },
});
