import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import netflixLogo from '../../../assets/netflix.png'
import downloadLogo from '../../../assets/download.png'
import search from '../../../assets/search.png'

export const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.icon}
          source={netflixLogo}
        />
        <View style={styles.buttonsNav}>
          <Image
            style={styles.iconRight}
            source={downloadLogo}
          />
          <Image
            style={styles.iconRight}
            source={search}
          />
        </View>
      </View>
      <View style={styles.categories}>
      <TouchableOpacity style={styles.series}><Text style={styles.textCategories}>Séries</Text></TouchableOpacity>
      <TouchableOpacity style={styles.movies}><Text style={styles.textCategories}>Filmes</Text></TouchableOpacity>
      <TouchableOpacity style={styles.category}><Text style={styles.textCategories}>Categorias</Text></TouchableOpacity>
      </View>
    </View>
  );
};
