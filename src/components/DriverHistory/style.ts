import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export const s = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    color: 'white',
    fontSize: 18,
    borderColor:Colors.primaryDark,
    borderBottomWidth:3,
    paddingBottom:18,
    marginTop:200,
    paddingHorizontal:44
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal:44,
    borderColor:Colors.primaryDark,
    borderBottomWidth:3,
    borderRadius: 8,
  },
  iconContainer: {
    borderRadius: 999,
    padding: 6,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  value: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  destination: {
    fontSize: 16,
    color: Colors.white,
  },
  date: {
    color: '#ccc',
    fontSize: 15,
    marginLeft: 8,
  },
});