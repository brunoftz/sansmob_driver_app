import { StyleSheet } from "react-native"
import Colors from "../../constants/colors"

export const s = StyleSheet.create({

    modalTitle: {
    color: Colors.white,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -30,
  },

  travelModalTitle: {
    color: Colors.white,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -10,
  },

  
  rideInfoContainer: {
    marginVertical: 16,
  },


  modalTime: {
    color: Colors.white,
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 5,
  },

  
  rideRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  
  point: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.white, // azul para origem

  },

  squarePoint: {
    width: 28,
    height: 28,
    borderRadius: 6,
    backgroundColor: Colors.white, // azul para origem

  },

  addressText: {
    flex: 1,
    fontSize: 20,
    color: Colors.white,
    marginLeft: 20
  },

  middleSection: {
    alignItems: 'center',
    marginBottom: 12,
  },

  verticalLine: {
    width: 2,
    height: 70,
    marginLeft: 11,
    backgroundColor: '#aaa',
    marginBottom: 4,
    marginRight: 20,
  },

  

  acceptButton: {
    backgroundColor: '#39D2C0',
    paddingVertical: 12,
    marginTop: 20,
    borderRadius: 8,
    alignItems: 'center',
  },

  acceptButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },


  rideArrival: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    marginVertical: 40
  },

  


  chatCard: {
    justifyContent: 'center',
    paddingVertical: 30,
    marginVertical: 40
  },
  appButton: {
    paddingVertical: 26,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 44
  },

  appButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '500',
  },
  subtitle: {
    color: Colors.subtitleText,
    fontSize: 20,
    marginBottom: 80,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  
  stopButton: {
    backgroundColor: Colors.errorText,
    paddingVertical: 12,
    marginTop: 90,
    borderRadius: 8,
    alignItems: 'center',
  },



})