import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
    backgroundColor: "#141414",
  },

  header: {
    width: "100%",
    paddingVertical: 20,
    backgroundColor: "#141414",
    justifyContent:"space-between",
    flexDirection: "row",
  },

  icon: {
    height: 50,
    width: 50,
    marginTop: 20,
    marginLeft: 15,
  },
  iconRight: {
    height: 35,
    width: 35,
  },

  buttonsNav:{
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 10,
    gap:20,
    marginRight:15
  },
  categories:{
    flexDirection: "row",
    gap: 15,
    marginLeft:15
  },
  series:{
    borderWidth: 1 ,
    borderColor: "white",
    width: "18%",
    height:30,
    borderRadius: 15,
    marginTop: 10,
    color:"white",
    justifyContent: "center",
    alignItems: "center",
  },
  
  movies:{
    borderWidth: 1,
    borderColor: "white",
    width: "18%",
    height:30,
    borderRadius: 15,
    marginTop: 10,
    color:"white",
    justifyContent: "center",
    alignItems: "center",
  },
  category:{
    borderWidth: 1 ,
    borderColor: "white",
    width: "25%",
    height:30,
    borderRadius: 15,
    marginTop: 10,
    color:"white",
    justifyContent: "center",
    alignItems: "center",
  },
  textCategories:{
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    
  },

});
