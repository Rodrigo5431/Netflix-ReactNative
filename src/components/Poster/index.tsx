import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import donzela  from '../../../assets/posterDonzela.jpg'

export const Poster = () => {
  return (
    <View style={styles.posterArea}>
      <Image
        style={styles.poster}
        source={donzela}
      />
      <TouchableOpacity style={styles.posterButtons}>
        <Text style={styles.watch}>Assistir</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.posterButtons}>
        <Text style={styles.list}>+ Minha Lista</Text>
      </TouchableOpacity>
    </View>
  );
};
