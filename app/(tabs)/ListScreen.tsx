import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

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
    <View>
      <FlatList
        data={pokemons}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ListScreen;
