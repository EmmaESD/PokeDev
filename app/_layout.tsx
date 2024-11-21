import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { Image, Pressable, StyleSheet, TextInput, View } from "react-native";

export default function RootLayout() {
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
            <TextInput
              placeholder="Search"
              placeholderTextColor={"#050B1B"}
              style={styles.input}
            />
            <Pressable style={styles.pressable}>
              <Ionicons name="search-outline" size={20} color="#fff" />
            </Pressable>
          </View>
        ),
      }}
    >
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
    flexDirection: "row",
    width: "100%",
  },
  input: {
    backgroundColor: "#EBF3F5",
    width: 175,
    height: 30,
    borderRadius: 5,
    fontSize: 8,
  },
  pressable: {
    backgroundColor: "#E43D1D",
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
});
