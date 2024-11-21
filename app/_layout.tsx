import { Stack } from "expo-router";
import { Image, Text, View } from "react-native";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1E90FF", // Couleur de fond du header
        },
        headerTintColor: "#fff", // Couleur du texte et des icônes
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },
        title: "PokéDev",
        headerTitle: () => (
          <View>
            <Image
              source={require("@/assets/images/logo.png")} // Assurez-vous que le chemin de l'image est correct
              style={{ width: 40, height: 40 }} // Taille du logo
              resizeMode="contain"
            />
            <Text>PokéDev</Text>
          </View>
        ),
      }}
    >
      <Stack.Screen name="(tabs)" options={{ title: "Tabs" }} />
    </Stack>
  );
}
