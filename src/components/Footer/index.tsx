import { Image, Text, View } from "react-native"
import { styles } from './style'
import home from '../../../assets/home.png'
import gamePad from '../../../assets/gamePad.png'
import news from '../../../assets/news.png'
import user from '../../../assets/user.jpg'


export const Footer = () =>{

    return(
        <View style={styles.footer}>
            <View style={styles.nav}>
                <Image style={styles.icon} source={home}></Image>
                <Text style={styles.text}>Inicio</Text>
            </View>
            <View style={styles.nav}>
                <Image style={styles.icon} source={gamePad}></Image>
                <Text style={styles.text}>Jogos</Text>
            </View>
            <View style={styles.nav}>
                <Image style={styles.icon} source={news}></Image>
                <Text style={styles.text}>Novidades</Text>
            </View>
            <View style={styles.nav}>
                <Image style={styles.icon} source={user}></Image>
                <Text style={styles.text}>Minha Netflix</Text>
            </View>
        </View>
    )
}