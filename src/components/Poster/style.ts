import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  posterArea: {
    alignItems: "center",
    marginTop: 25,
    backgroundColor: '#141414',

  },

  poster: {
    width: "90%",
    height: 550,
    borderWidth: 1,
    borderColor: "white",
  },

  texto: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  posterButtons:{
    flexDirection:'row',
    gap:15,
    textAlign: 'center',

  },
  watch:{
    position: 'absolute',
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    width: '40%',
    height:40,
    alignItems: "center",
    bottom: 20,
    right: 10,
    textAlign: 'center',    
    color: 'black',
    fontSize: 22,
    backgroundColor:'white',
    textAlignVertical:'center'

  },
  list: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    width: '40%',
    height: 40,
    bottom: 20,
    fontSize: 22,
    textAlign: 'center',
    padding: 'auto',
    color: 'white',
    backgroundColor:'#565756',
    textAlignVertical:'center'
  },

});
