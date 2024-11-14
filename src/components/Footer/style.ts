import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    footer:{
        width: '100%',
        height: 60,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'black',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    nav:{
        marginLeft:15,
        marginTop:9,
        alignItems: 'center'
    },
    icon:{
        backgroundColor: 'white',
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    text:{
        color: 'white',
        fontSize: 10,
        marginTop: 10,
        marginBottom: 10,
        fontWeight: 'bold'
    }
})