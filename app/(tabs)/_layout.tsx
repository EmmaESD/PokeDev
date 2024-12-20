import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="ListScreen"
        options={{
          title: "pokémons",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="list-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="FightScreen"
        options={{
          title: "PokéFight",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="game-controller-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="generation/[id]"
        options={{
          title: "PokéFight",
          headerShown: false,
          href: null,
        }}
      />
      <Tabs.Screen
        name="type/[id]"
        options={{
          title: "PokéFight",
          headerShown: false,
          href: null,
        }}
      />
      <Tabs.Screen
        name="randomPokemon"
        options={{
          title: "PokéFight",
          headerShown: false,
          href: null,
        }}
      />
    </Tabs>
  );
}
