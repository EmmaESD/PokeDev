import { useRandomPokemon } from "@/hook/useRandomPokemon";
import { useRandomType } from "@/hook/useRandomType";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
} from "react-native";

export default function Index() {
  const [searchText, setSearchText] = useState("");

  const pokemons = useRandomPokemon();
  const types = useRandomType();

  const handleNavigateToDetails = (id: Number) => {
    router.push(`/pokemon/${id}`);
  };
  const handleNavigateToRandomPokemon = () => {
    router.push(`/randomPokemon`);
  };

  const handleSearch = () => {
    router.push(`/search/${searchText}`);
  };

  return (
    <ImageBackground
      source={require("@/assets/images/bg.png")}
      resizeMode="cover"
      style={styles.background}
    >
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.inputContent}>
            <TextInput
              placeholder="Search"
              placeholderTextColor={"#050B1B"}
              style={styles.input}
              onChangeText={setSearchText}
              value={searchText}
              editable={true}
            />

            <Pressable style={styles.pressable} onPress={handleSearch}>
              <Ionicons name="search-outline" size={20} color="#fff" />
            </Pressable>
          </View>
          <View style={styles.sliderContainer}>
            <Text style={styles.h2}>Random Team</Text>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={pokemons}
              renderItem={({ item }) => (
                <View style={styles.cardContainer}>
                  <Text style={styles.p}>#{item.pokedexId}</Text>
                  <Text style={styles.p}>{item.name}</Text>
                  <Text style={styles.imageType}>{item.apiTypes.name}</Text>
                  <Image src={item.image} style={styles.image} />
                  <Pressable
                    style={styles.pressableDetails}
                    onPress={() => handleNavigateToDetails(item.id)}
                  >
                    <Text style={styles.p}>Details</Text>
                  </Pressable>
                </View>
              )}
            />
          </View>
          <View style={styles.pressableContainer}>
            <Pressable
              style={styles.pressableRandom}
              onPress={handleNavigateToRandomPokemon}
            >
              <Text style={styles.h2}>Generate a random pokemon</Text>
            </Pressable>
          </View>

          <View style={styles.sliderContainer}>
            <Text style={styles.h2}>Types</Text>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={types}
              renderItem={({ item }) => (
                <View style={styles.cardContainer}>
                  <Text style={styles.p}>{item.name}</Text>
                  <Image src={item.image} style={styles.image} />
                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  inputContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
  pressableContainer: {
    display: "flex",
    alignItems: "center",
  },
  sliderContainer: {
    display: "flex",
    gap: 20,
  },
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
  },

  cardContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginHorizontal: 20,
    borderRadius: 20,
    gap: 10,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
  },
  image: {
    width: 100,
    height: 100,
  },
  imageType: {
    width: 20,
    height: 20,
  },
  pressableDetails: {
    backgroundColor: "#E43D1D",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
  },
  p: {
    color: "#fff",
  },
  pressableRandom: {
    backgroundColor: "#E43D1D",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
    width: 200,
  },
});
