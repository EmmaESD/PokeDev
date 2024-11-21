import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const ListScreen = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    (async () => {
      const pokemonsJson = await fetch(
        "https://pokebuildapi.fr/api/v1/pokemon"
      );
      const pokemons = await pokemonsJson.json();
      setPokemons(pokemons);
    })();
  }, []);
  return (
    <ImageBackground
      source={require("@/assets/images/bg.png")}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.mainContainer}>
        <Text style={styles.h2}>Pokémons List</Text>
        <FlatList
          data={pokemons}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <Image src={item.sprite} style={styles.image} />
              <Text style={styles.p}>{item.name}</Text>
              <Pressable style={styles.pressableDetails}>
                <Text style={styles.p}>Details</Text>
              </Pressable>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
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
    flexDirection: "row",
    marginVertical: 10,
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "space-between",
  },

  mainContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 30,
    backgroundImage: "",
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  image: {
    width: 50,
    height: 50,
  },
  p: {
    color: "#fff",
  },
});

export default ListScreen;
