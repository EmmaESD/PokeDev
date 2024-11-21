import { useRandomPokemon } from "@/hook/useRandomPokemon";
import { useRandomType } from "@/hook/useRandomType";
import { FlatList, Text, View } from "react-native";

export default function Index() {
  const pokemons = useRandomPokemon();
  const types = useRandomType();

  return (
    <View>
      <FlatList
        data={pokemons}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      />
      <View>
        <FlatList
          data={types}
          renderItem={({ item }) => (
            <View>
              <Text>{item.name}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
