import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export const s = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    color: 'white',
    fontSize: 16,
    marginBottom: 12,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primaryDark,
    paddingVertical: 10,
    paddingHorizontal: 8,
    marginBottom: 12,
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
    fontSize: 16,
  },
  destination: {
    color: '#aaa',
    fontSize: 13,
  },
  date: {
    color: '#ccc',
    fontSize: 12,
    marginLeft: 8,
  },
});