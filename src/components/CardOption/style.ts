import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export const s = StyleSheet.create({
    card: {
      backgroundColor: Colors.primaryDark,
      borderRadius: 16,
      padding: 20,
      paddingVertical:50,
      marginBottom: 18,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      elevation: 2,
    },
    label: {
      color: '#fff',
      fontSize:22
    },
    boldLabel: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize:22
    },
    iconStyle: {
      marginRight:10,
    },
    cornerIcon:{
      position:'absolute',
      right:30
    }
  });
  