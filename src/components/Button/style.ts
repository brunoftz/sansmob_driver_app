import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export const s = StyleSheet.create({
    button: {
      padding: 18,
      borderRadius: 15,
      alignItems: 'center',
      marginBottom: 25,
    },
    primaryButton: {
      backgroundColor: Colors.primaryBlue,
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: Colors.primaryBlue,
    },
    buttonText: {
      fontWeight: 'bold',
      fontSize: 20,
    },
    primaryText: {
      color: '#fff',
    },
    secondaryText: {
      color: Colors.primaryBlue,
    },
  }); 