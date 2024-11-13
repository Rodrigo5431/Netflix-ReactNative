import { ScrollView, View } from "react-native";
import { Header } from "../../components/Header";
import { Poster } from "../../components/Poster";
import { styles } from "./style";
import { Horror } from "../../components/Categories/horror";
import { Action } from "../../components/Categories/action";
import { Futuristic } from "../../components/Categories/Futuristic";
import { Footer } from "../../components/Footer";

export const Home = () => {
  return (
    <>
      <ScrollView style={styles.container}>
        <Header />
        <Poster />
        <Horror />
        <Action />
        <Futuristic />
      </ScrollView>
      <Footer />
    </>
  );
};
