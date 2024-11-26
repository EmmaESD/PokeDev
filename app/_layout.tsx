import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, TextInput, View } from "react-native";

export default function RootLayout() {
  // Fonction pour filtrer les Pokémon

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
              source={require("@/assets/images/logo.png")}
              style={{ width: 148, height: 51 }}
              resizeMode="contain"
            />
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
      <Stack.Screen
        name="search/[query]"
        options={{ title: "search pokemons" }}
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
});
