import { useGetPokemonById } from "@/hook/useGetPokemonById";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

export default function detailsPokemonId() {
  const pokemons = useGetPokemonById();
  return (
    <ImageBackground
      source={require("@/assets/images/bg.png")}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.mainContainer}>
        <View style={styles.content}>
          <Text style={styles.h2}>{pokemons.name}</Text>
          <Text style={styles.p}>#{pokemons.pokedexId}</Text>
          <Image source={{ uri: pokemons.image }} style={styles.image} />
          <View></View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  h2: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: 700,
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 100,
    backgroundImage: "",
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  content: {
    display: "flex",
    alignItems: "center",
    padding: 20,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  p: {
    color: "#fff",
    textAlign: "center",
  },
});
