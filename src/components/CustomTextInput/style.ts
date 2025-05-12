import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export const s = StyleSheet.create({
    input: {
        backgroundColor: Colors.primaryDark,
        color: '#fff',
        padding: 15,
        paddingVertical: 20,
        borderRadius: 15,
        marginBottom: 20,
        fontSize:20
      },
      passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.primaryDark,
        color: '#fff',
        borderRadius: 15,
        marginBottom: 20,
        paddingVertical: 5,
        
      },
      inputPassword: {
        flex: 1,
        color: '#fff',
        padding: 15,
        fontSize:20
      },
      icon: {
        paddingHorizontal: 15,
      },
  }); 