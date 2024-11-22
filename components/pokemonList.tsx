import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Pressable } from "react-native-gesture-handler";

export const PokemonList = () => {
  const [pokemonsByGen, setPokemonsByGen] = useState(null);
  const { id } = useLocalSearchParams();

  useEffect(() => {
    (async () => {
      const pokemonsByGenJson = await fetch(
        `https://pokebuildapi.fr/api/v1/pokemon/generation/${id}`
      );
      const pokemonsByGen = await pokemonsByGenJson.json();
      setPokemonsByGen(pokemonsByGen);
    })();
  }, [id]);

  const handleNavigateToGen = (id: Number) => {
    router.push(`/generation/${id}`);
  };
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Text style={styles.h2}>Générations</Text>
        <View style={styles.genContainer}>
          <Pressable
            style={styles.pressableGen}
            onPress={() => handleNavigateToGen(1)}
          >
            <Text style={styles.h2}>Generation 1</Text>
          </Pressable>
          <Pressable
            style={styles.pressableGen}
            onPress={() => handleNavigateToGen(2)}
          >
            <Text style={styles.h2}>Generation 2</Text>
          </Pressable>
          <Pressable
            style={styles.pressableGen}
            onPress={() => handleNavigateToGen(3)}
          >
            <Text style={styles.h2}>Generation 3</Text>
          </Pressable>
          <Pressable
            style={styles.pressableGen}
            onPress={() => handleNavigateToGen(4)}
          >
            <Text style={styles.h2}>Generation 4</Text>
          </Pressable>
          <Pressable
            style={styles.pressableGen}
            onPress={() => handleNavigateToGen(5)}
          >
            <Text style={styles.h2}>Generation 5</Text>
          </Pressable>
          <Pressable
            style={styles.pressableGen}
            onPress={() => handleNavigateToGen(6)}
          >
            <Text style={styles.h2}>Generation 6</Text>
          </Pressable>
          <Pressable
            style={styles.pressableGen}
            onPress={() => handleNavigateToGen(7)}
          >
            <Text style={styles.h2}>Generation 7</Text>
          </Pressable>
          <Pressable
            style={styles.pressableGen}
            onPress={() => handleNavigateToGen(8)}
          >
            <Text style={styles.h2}>Generation 8</Text>
          </Pressable>
          <Pressable
            style={styles.pressableGen}
            onPress={() => handleNavigateToGen(9)}
          >
            <Text style={styles.h2}>Generation 9</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pressableButton1: {
    backgroundColor: "#72C84D",
    padding: 20,
    borderRadius: 10,
  },
  pressableButton2: {
    backgroundColor: "#3899C3",
    padding: 20,
    borderRadius: 10,
  },
  pressableGen: {
    width: 200,
    height: 100,
    backgroundColor: "#E43D1D",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  pressableContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
    gap: 20,
  },
  background: {
    flex: 1,
  },
  pressableDetails: {
    backgroundColor: "#E43D1D",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
  },
  h2: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: 700,
  },
  cardContainer: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#fff",
    display: "flex",
    flexDirection: "column",
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "space-between",
  },
  genContainer: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 20,
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 30,
    backgroundImage: "",
    paddingVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  p: {
    color: "#fff",
  },
});
