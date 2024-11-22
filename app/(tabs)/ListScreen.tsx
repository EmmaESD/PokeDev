import { PokemonList } from "@/components/pokemonList";
import { TypeList } from "@/components/typesList";
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
import { GestureHandlerRootView } from "react-native-gesture-handler";

const ListScreen = () => {
  const [activeComponent, setActiveComponent] = useState("pokemon");
  return (
    <GestureHandlerRootView>
      <ImageBackground
        source={require("@/assets/images/bg.png")}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.mainContainer}>
          <View style={styles.pressableContainer}>
            <Pressable
              onPress={() => setActiveComponent("pokemon")}
              style={styles.pressableButton1}
            >
              <Text style={styles.h2}>Pokémons</Text>
            </Pressable>
            <Pressable
              onPress={() => setActiveComponent("type")}
              style={styles.pressableButton2}
            >
              <Text style={styles.h2}>Types</Text>
            </Pressable>
          </View>
          <View>
            {activeComponent === "pokemon" ? <PokemonList /> : <TypeList />}
          </View>
        </View>
      </ImageBackground>
    </GestureHandlerRootView>
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
  pressableContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
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
