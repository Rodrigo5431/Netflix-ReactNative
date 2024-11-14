import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { styles } from "./style";
import { DataAPI, dataApiProps } from "../../../Mock/data";
import { useState } from "react";

export const Futuristic = () => {

  const listaFiltrada:dataApiProps[] = DataAPI.filter(filme => filme.category === "ola")
  const [fut, setFut] = useState<dataApiProps[]>(listaFiltrada)
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filmes Futuristas</Text>
      <FlatList
        style={styles.list}
        horizontal={true}
        data={fut}
        keyExtractor={(dados) => dados.id.toString()}
        renderItem={
          ({ item }) =>
              <View style={styles.moviesList}>
                <Image
                  style={styles.capa}
                  source={item.image}
                  alt="capa do filme"
                  />
                
              </View>
          }
          />
    </View>
  );
};
