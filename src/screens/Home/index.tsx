import { ScrollView, View } from "react-native"
import { Header } from "../../components/Header"
import { Poster } from "../../components/Poster"
import { styles } from "./style"
import { Terror } from "../../components/Terror"

export const Home = () => {

    return(
        <ScrollView style={styles.container}>
            <Header/>
            <Poster/>
            <Terror/>
        </ScrollView>
    )
}