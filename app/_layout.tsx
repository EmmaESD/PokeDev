import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, TextInput, View } from "react-native";

export default function RootLayout() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchText, setSearchText] = useState(""); // État pour la recherche
  const [filteredPokemon, setFilteredPokemon] = useState([]); // Liste filtrée

  useEffect(() => {
    (async () => {
      const pokemonJson = await fetch("https://pokebuildapi.fr/api/v1/pokemon");
      const pokemonList = await pokemonJson.json();
      setPokemonList(pokemonList);
      setFilteredPokemon(pokemonList); // Initialiser avec toute la liste
    })();
  }, []);

  // Fonction pour filtrer les Pokémon
  const handleSearch = (text: string) => {
    setSearchText(text); // Mettre à jour le texte de recherche
    const filtered = pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredPokemon(filtered);
  };

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#000000",
          // Couleur de fond du header
        },
        headerTintColor: "#000000", // Couleur du texte et des icônes
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },
        title: "PokéDev",
        headerTitle: () => (
          <View style={styles.header}>
            <Image
              source={require("@/assets/images/logo.png")} // Assurez-vous que le chemin de l'image est correct
              style={{ width: 148, height: 51 }} // Taille du logo
              resizeMode="contain"
            />
            <View style={styles.inputContent}>
              <TextInput
                placeholder="Search"
                placeholderTextColor={"#050B1B"}
                style={styles.input}
                value={searchText}
                onChangeText={(text) => handleSearch(text)}
                editable={true}
              />
              <Pressable style={styles.pressable}>
                <Ionicons name="search-outline" size={20} color="#fff" />
              </Pressable>
            </View>
          </View>
        ),
      }}
    >
      <Stack.Screen
        name="randomPokemon"
        options={{ title: "random pokemon" }}
      />
      <Stack.Screen
        name="pokemon/[id]"
        options={{ title: "pokemon details" }}
      />
      <Stack.Screen name="generation/[id]" options={{ title: "generation" }} />
      <Stack.Screen name="test" options={{ title: "test" }} />

      <Stack.Screen name="(tabs)" options={{ title: "Tabs" }} />
    </Stack>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: 20,
  },
  inputContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  input: {
    backgroundColor: "#EBF3F5",
    width: 200, // Augmentez légèrement la largeur
    height: 40, // Augmentez la hauteur
    borderRadius: 5,
    fontSize: 14, // Taille de police plus lisible
    paddingHorizontal: 10,
  },
  pressable: {
    marginLeft: 10,
    backgroundColor: "#E43D1D",
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
