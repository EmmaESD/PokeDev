import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

export const useGetPokemonByType = () => {
  const [pokemon, setPokemon] = useState([]);
  const { id } = useLocalSearchParams();

  useEffect(() => {
    (async () => {
      const pokemonJson = await fetch(
        `https://pokebuildapi.fr/api/v1/pokemon/type/${id}`
      );
      const pokemon = await pokemonJson.json();
      setPokemon(pokemon);
    })();
  }, []);
  return pokemon;
};
