import { useGetPokemonByType } from "@/hook/useGetPokemonByType";
import { router, useFocusEffect, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Type = () => {
  const handleNavigateToDetails = (id: Number) => {
    router.push(`/pokemon/${id}`);
  };

  const type = useGetPokemonByType();

  if (!type) {
    return (
      <View>
        <Text>load...</Text>
      </View>
    );
  }
  return (
    <ImageBackground
      source={require("@/assets/images/bg.png")}
      resizeMode="cover"
      style={styles.background}
    >
      <View>
        <FlatList
          data={type}
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
    </ImageBackground>
  );
};

export default Type;

const styles = StyleSheet.create({
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
    marginVertical: 20,
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
});
