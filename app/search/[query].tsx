import { useLocalSearchParams } from "expo-router";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import useGetPokemonByName from "@/hook/useGetPokemonByName";
import { router } from "expo-router";

export default function QueryScreen() {
  const { query } = useLocalSearchParams();
  const pokemon = useGetPokemonByName(query as string); // Utiliser le hook avec la requête

  if (!pokemon) {
    return (
      <ImageBackground
        source={require("@/assets/images/bg.png")}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.mainContainer}>
          <Text style={styles.h2}>Aucun Pokémon trouvé ou chargement...</Text>
        </View>
      </ImageBackground>
    );
  }

  const handleNavigateToDetails = (id: Number) => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <ImageBackground
      source={require("@/assets/images/bg.png")}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.mainContainer}>
        <View style={styles.content}>
          <Text style={styles.h2}>{pokemon.name}</Text>
          <Text style={styles.p}>#{pokemon.pokedexId}</Text>
          <Image source={{ uri: pokemon.image }} style={styles.image} />
        </View>
        <Pressable
          style={styles.pressableDetails}
          onPress={() => handleNavigateToDetails(pokemon.id)}
        >
          <Text style={styles.p}>Details</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  mainContainer: {
    paddingVertical: 50,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 20,
  },
  pressableDetails: {
    backgroundColor: "#E43D1D",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
  },
  h2: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },
  p: {
    color: "#fff",
    textAlign: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
});
