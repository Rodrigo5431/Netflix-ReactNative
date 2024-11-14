import { Image, Text, View } from "react-native"
import { styles } from "./style"
import netflixIcon from '../../../assets/netflixName.png'
import back from '../../../assets/back.png'

export const HeaderLogin = () =>{
    return(
        <View style={styles.header}>
            
            <Image style={styles.iconBack} source={back}></Image>
            <Image style={styles.icon} source={netflixIcon}></Image>
            <Text style={styles.help}>Ajuda</Text>
        </View>
    )
}