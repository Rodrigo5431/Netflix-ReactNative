import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { styles } from "./style";
import { DataAPI } from "../../Mock/data";

export const Terror = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filmes de Terror</Text>
      <FlatList 
        style ={styles.list}
        horizontal={true}
        data={DataAPI}
        keyExtractor={(dados) => dados.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.moviesList}>
            <Image
              style={styles.capa}
              source={item.image}
              alt="capa do filme"
            />
          </View>
        )}
      />


    </View>
  );
};
