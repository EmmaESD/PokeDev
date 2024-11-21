import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

export const useGetPokemonById = () => {
  const [pokemons, setPokemons] = useState([]);
  const { id } = useLocalSearchParams();

  useEffect(() => {
    (async () => {
      const pokemonsJson = await fetch(
        `https://pokebuildapi.fr/api/v1/pokemon/${id}`
      );
      const pokemons = await pokemonsJson.json();
      setPokemons(pokemons);
    })();
  }, []);
  return pokemons;
};
